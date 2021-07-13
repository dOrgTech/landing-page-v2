import {Member} from "../constants/members";
import { AIRTABLE_API_KEY } from "../config.json";

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

interface AirtableMember {
  fields: {
    Name: string,
    Headshot: {url: string}[],
    Skills: string[],
    Github: string,
    'Portfolio Link': string
  }
}

export async function getMembers(): Promise<Member[]> {
  const apiKey: string = process.env.AIRTABLE_API_KEY ?? AIRTABLE_API_KEY ?? "";
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/tblb0WHq7hTaODqks?fields%5B%5D=Name&fields%5B%5D=Email&fields%5B%5D=Github&fields%5B%5D=Portfolio+Link&fields%5B%5D=Skills&fields%5B%5D=Headshot&sort%5B0%5D%5Bfield%5D=Onboarding+Date&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Name&sort%5B1%5D%5Bdirection%5D=asc&view=viw15s9zxmaFM8NkO",
    {
      method: "GET",
      headers: new Headers({
        "Authorization": `Bearer ${apiKey}`
      })
    }
  ).then(response => response.json())
    .then((response: {records: AirtableMember[]}) => response.records.map(record => ({
      name: record.fields.Name ? record.fields.Name : "",
      photo: record.fields.Headshot ? record.fields.Headshot[0].url : undefined,
      skills: record.fields.Skills ? record.fields.Skills : [],
      portfolio: {
        github: record.fields.Github,
        website: record.fields['Portfolio Link'] === 'n/a' ? undefined : record.fields['Portfolio Link'],
      }
    })));
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const apiKey: string = process.env.AIRTABLE_API_KEY ?? AIRTABLE_API_KEY ?? "";
  const body: FormSubmission = { 
    fields: {
      Name: data.name,
      Email: data.email,
      Message: data.message
    } 
  };
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