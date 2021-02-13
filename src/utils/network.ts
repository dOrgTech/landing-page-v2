import {Member} from "../constants/members";
import {HUBSPOT_URI} from "../constants/contactForm";


export const JBIN_SECRET_KEY = '$2b$10$IAKKq32UtWoiUtMm59uimezHHZEH8p8RA1jNX7tVPmOkgtUmrQK4G';
export const BIN_ID = '60272fc187173a3d2f5c5ee6';

interface jsonBinResponse {
  record: Member[],
  metadata: {
    id: string,
    private: boolean
  }
}

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export async function getMembers(binId: string, secretKey: string): Promise<Member[]> {
  return fetch(
    `https://api.jsonbin.io/v3/b/${binId}/latest`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-Master-Key': secretKey
      }
    }
  ).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw Error('HTTP Error');
    }
    return response.json();
  })
    .then((body: jsonBinResponse) => {
      return body.record
    });
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