import * as hubspot from '@hubspot/api-client';
import {Member} from "../constants/members";
import {HUBSPOT_URI} from "../constants/contactForm";

interface HubspotMember {
  firstname?: string;
  lastname?: string;
  avatar_image?: string;
  which_role_s__are_you_applying_for_?: string;
  github?: string;
  portfolio?: string;
  linkedin?: string;
}

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export async function fetchMembers(apiKey: string): Promise<Member[]> {
  // reference: https://github.com/HubSpot/hubspot-api-nodejs
  const hubspotClient = new hubspot.Client({ apiKey: apiKey});
  const filter = { propertyName: 'jobtitle', operator: 'EQ', value: 'dOrg Builder' }
  const filterGroup = { filters: [filter] }
  const sort = JSON.stringify({ propertyName: 'createdate', direction: 'ASCENDING' })
  const properties = ['firstname', 'lastname', 'avatar_image', 'which_role_s__are_you_applying_for_', 'github', 'linkedin', 'portfolio']
  const limit = 100
  const after = 0
  const publicObjectSearchRequest = {
    filterGroups: [filterGroup],
    sorts: [sort],
    properties,
    limit,
    after,
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const response = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)

  const members: Member[] = []
  for (const result of response.body.results) {
    const contact: HubspotMember = result.properties;
    const name = (contact.firstname ? contact.firstname : '') + ' ' + (contact.lastname ? contact.lastname : '')
    members.push({
      name: name.trim(),
      photo: contact.avatar_image ? contact.avatar_image : 'https://www.newdvdreleasedates.com/images/profiles/christopher-walken-13.jpg',
      skills: contact.which_role_s__are_you_applying_for_ ? contact.which_role_s__are_you_applying_for_.split(';') : [],
      portfolio: {
        github: contact.github,
        website: contact.portfolio,
        linkedin: contact.linkedin,
      }
    })
  }
  return members
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