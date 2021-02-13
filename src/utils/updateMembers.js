const hubspot = require('@hubspot/api-client');
const fetch = require('node-fetch');

const HS_API_KEY = process.env.HS_API_KEY;
const JBIN_SECRET_KEY = process.env.JBIN_SECRET_KEY;
const BIN_ID = process.env.BIN_ID;

// reference: https://github.com/HubSpot/hubspot-api-nodejs
// takes apiKey as string, calls hubspot api, and returns Promise<Member[]>
async function fetchMembers(apiKey) {
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
  const response = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)

  const members = []
  for (const result of response.body.results) {
    const contact = result.properties;
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

// upload json to jsonbin.io
async function updateMembersJson(members, binId, secretKey) {
  return fetch(
    `https://api.jsonbin.io/b/${binId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'secret-key': secretKey
      },
      body: JSON.stringify(members)
    }
  ).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw Error('HTTP Error');
    }
    return response;
  })
}


// export functions
exports.fetchMembers = (apiKey) => fetchMembers(apiKey);
exports.updateMembersJson = (members, binId, secretKey) => updateMembersJson(members, binId, secretKey);
