import { getGuildMembers, isGuildMember } from './discord'

describe('discord', () => {
  it('env vars are set', () => {
    // 存在する
    expect(process.env.DISCORD_BOT_TOKEN).not.toEqual(null)
    // 一定の長さ以上
    expect(process.env.DISCORD_BOT_TOKEN?.length).toBeGreaterThan(10)
  })
  it('getGuildMembers', async () => {
    const result = await getGuildMembers()

    expect(result).not.toEqual(null)
  })
  it('isGuildMember', async () => {
    const sub = 'oauth|discord|502486808211357707'
    const userId = sub.split('|')[2]
    const result = await isGuildMember(userId)

    expect(result).not.toEqual(null)
  })
})
