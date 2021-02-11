const hubspot = require('@hubspot/api-client') // eslint-disable-line

// reference: https://github.com/HubSpot/hubspot-api-nodejs
// takes apiKey as string and returns Promise<Member[]>
async function fetchMembers(apiKey) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

exports.fetchMembers = (apiKey) => fetchMembers(apiKey);