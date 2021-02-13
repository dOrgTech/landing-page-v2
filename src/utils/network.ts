import {Member} from "../constants/members";
import {HUBSPOT_URI} from "../constants/contactForm";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}
interface FormSubmission {
  fields: {name: string, value: string}[];
  context?: {ipAddress: string};
}

export async function getMembers(): Promise<Member[]> {
  const loc = window.location;
  const baseUrl = `${loc.protocol}//${loc.hostname}:${loc.port}`;
  return fetch(`${baseUrl}/members`, {mode: 'same-origin'})
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json() as Promise<Member[]>
    })
}

async function getIpAddress(): Promise<string> {
  return fetch('https://api.ipify.org')
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return '';
    })
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const firstname = data.name.split(' ')[0];
  const lastname = data.name.substring(firstname.length).trim();
  const clientIpAddress = await getIpAddress();

  const body: FormSubmission = {
    fields: [
      {name: 'firstname', value: firstname},
      {name: 'lastname', value: lastname},
      {name: 'email', value: data.email},
      {name: 'message', value: data.message}
    ]
  }
  if (clientIpAddress) {
    body.context = {ipAddress: clientIpAddress}
  }

  return fetch(
    HUBSPOT_URI,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(body)
    }
  ).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw Error('HTTP Error');
    }
    return response;
  })
}