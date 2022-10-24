import * as axios from 'axios'

interface DiscordMember {
  avatar: null
  communication_disabled_until: null
  flags: number
  is_pending: boolean
  joined_at: string
  nick: null | string
  pending: boolean
  premium_since: null
  roles: string[]
  user: {
    id: string
    username: string
    avatar: string
    avatar_decoration: null
    discriminator: string
    public_flags: number
  }
  mute: boolean
  deaf: boolean
}

export const getGuildMembers = async (): Promise<DiscordMember[]> => {
  const token = process.env.DISCORD_BOT_TOKEN
  const service = axios.default.create({
    baseURL: 'https://discord.com/api',
    headers: {
      Authorization: `Bot ${token}`,
    },
  })

  const guildId = process.env.DISCORD_GUILD_ID
  const { data } = await service.get(`/guilds/${guildId}/members?limit=1000`)

  return data
}

export const isGuildMember = async (discordId: string): Promise<boolean> => {
  const members = await getGuildMembers()
  const member = members.find((m) => m.user.id === discordId)
  return !!member
}
