import {Member} from "../constants/members";


interface IFormInput {
  name: string;
  email: string;
  message: string;
}

interface FormSubmission {
  fields: IFormInput
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

async function getIpAddress(): Promise<string> {
  return fetch('https://api.ipify.org')
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return '';
    })
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const body: FormSubmission = { fields: data };
  const apiKey: string = process.env.AIRTABLE_API_KEY ?? "";
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/Contacts",
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
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