import { getGuildMembers, isGuildMember } from './discord'

describe('discord', () => {
  it('getGuildMembers', async () => {
    const result = await getGuildMembers()
    console.log(result)

    expect(result).not.toEqual(null)
  })
  it('isGuildMember', async () => {
    const sub = 'oauth|discord|502486808211357707'
    const userId = sub.split('|')[2]
    const result = await isGuildMember(userId)
    console.log(result)

    expect(result).not.toEqual(null)
  })
})
