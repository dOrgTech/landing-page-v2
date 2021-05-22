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
  const apiKey: string = process.env.AIRTABLE_API_KEY ?? "";
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/Contacts",
    {
      method: "POST",
      headers: new Headers({
        "Authorization": `Bearer ${apiKey}`,
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