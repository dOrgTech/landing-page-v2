import {Member} from "../constants/members";
import {HUBSPOT_URI} from "../constants/contactForm";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export async function getMembers(): Promise<Member[]> {
  return fetch('/api/members')
    .then(response => {
      if (!response.ok) {
        console.log(response.json());
        throw Error('HTTP Error');
      }
      return response.json();
    })
    .then(members => members as Member[])
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const firstname = data.name.split(' ')[0];
  const lastname = data.name.substring(firstname.length).trim();
  return fetch(
    HUBSPOT_URI,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({fields: [
        {name: 'firstname', value: firstname},
        {name: 'lastname', value: lastname},
        {name: 'email', value: data.email},
        {name: 'message', value: data.message}
      ]})
    }
  ).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw Error('HTTP Error');
    }
    return response;
  })
}