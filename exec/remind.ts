import { format, parseISO } from 'npm:date-fns@latest'
const DISCORD_WEBHOOK_URL = Deno.env.get('DISCORD_WEBHOOK_URL')

if (!DISCORD_WEBHOOK_URL) {
  throw new Error('Missing DISCORD_WEBHOOK_URL environment variable')
}

// お茶会の予定情報を取得
const managerUrl = Deno.env.get('MANAGER_URL')
if (!managerUrl) {
  throw new Error('Missing MANAGER_URL environment variable')
}

const main = async () => {
  const res = await fetch(`${managerUrl}/api/tea-party`)
  const {
    data,
  }: {
    data: {
      date: string
      host: { name: string; discordUserId: string }
      coHost: { name: string; discordUserId: string } | null
    }[]
  } = await res.json()

  // お茶会の予定がない場合は「登録されている予定はありませんでした」
  if (data.length === 0) {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: '登録されている予定はありませんでした',
      }),
    })
    return
  }

  // お茶会の予定がある場合は「次回のお茶会は...」
  const message = createMessage(data[0])
  await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: message,
    }),
  })
}

const discordMensionString = (discordUserId: string) => `<@!${discordUserId}>`

/**
 * 登録されている、次回のお茶会の予定は
 * 5月22日(日)です
 * 司会は@hogeさん、サブ司会は@fugaさんです
 */
const createMessage = (data: {
  date: string
  host: { name: string; discordUserId: string }
  coHost: { name: string; discordUserId: string } | null
}) => {
  const date = parseISO(data.date)
  const dateStr = format(date, 'M月d日(E)')
  const host = discordMensionString(data.host.discordUserId)
  const coHostMessage = data.coHost
    ? `サブ司会は${discordMensionString(data.coHost.discordUserId)}さんです`
    : 'サブ司会は登録されていません'
  return `登録されている次回のお茶会は${dateStr}です\n司会は${host}さん、${coHostMessage}`
}

await main()
