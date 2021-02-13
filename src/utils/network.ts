import {Member} from "../constants/members";
import {HUBSPOT_URI} from "../constants/contactForm";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

interface Ipify {
  ip: string;
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
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json() as Promise<Ipify>)
    .then(data => data.ip)
}

export const sendContactForm = async (data: IFormInput): Promise<Response> => {
  const firstname = data.name.split(' ')[0];
  const lastname = data.name.substring(firstname.length).trim();
  const clientIpAddress = await getIpAddress();
  return fetch(
    HUBSPOT_URI,
    {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        fields: [
          {name: 'firstname', value: firstname},
          {name: 'lastname', value: lastname},
          {name: 'email', value: data.email},
          {name: 'message', value: data.message}
        ],
        ipAddress: clientIpAddress
      })
    }
  ).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw Error('HTTP Error');
    }
    return response;
  })
}