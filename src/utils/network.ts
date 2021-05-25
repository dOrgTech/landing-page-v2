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
  const lambdaUrl = '/.netlify/functions/getMembers';
  return fetch(lambdaUrl, {mode: 'same-origin'})
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
  const lambdaUrl = '/.netlify/functions/submitContactForm';
  return fetch(lambdaUrl, {
    mode: 'same-origin',
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