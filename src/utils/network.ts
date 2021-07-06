import {Member} from "../constants/members";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

interface FormSubmission {
  fields: {
    Name: string,
    Email: string,
    Message: string
  }
}

export async function getMembers(): Promise<Member[]> {
  const url = window.location.href + '/members';
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json() as Promise<Member[]>
    })
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const body: FormSubmission = { 
    fields: {
      Name: data.name,
      Email: data.email,
      Message: data.message
    } 
  };
  const url = window.location.href + '/submitContactForm';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        console.log(response.json());
        throw Error('HTTP Error');
      }
      return response;
    })
}