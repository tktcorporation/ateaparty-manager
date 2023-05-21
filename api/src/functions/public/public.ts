import type { APIGatewayEvent, Context } from 'aws-lambda'
import { addWeeks, format } from 'date-fns'

import { db } from 'src/lib/db'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (_event: APIGatewayEvent, _context: Context) => {
  // 直近二回のお茶会予定を取得
  const teaParties = await db.teaParty.findMany({
    orderBy: { date: 'desc' },
    // 現在から二週間以内
    where: { date: { gte: new Date(), lt: addWeeks(new Date(), 2) } },
    include: {
      host: true,
      cohost: true,
    },
    take: 2,
  })
  const result: {
    date: string
    host: { name: string; discordUserId: string }
    coHost: { name: string; discordUserId: string } | null
  }[] = teaParties.map((teaParty) => ({
    date: format(teaParty.date, 'yyyy-MM-dd'),
    host: {
      name: teaParty.host.name,
      discordUserId: subToDiscordUserId(teaParty.host.sub),
    },
    coHost:
      (teaParty.cohost && {
        name: teaParty.cohost.name,
        discordUserId: subToDiscordUserId(teaParty.cohost.sub),
      }) ??
      null,
  }))
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: result,
    }),
  }
}

/**
 * oauth2|discord|502486808211357707 to 502486808211357707
 * @param sub
 */
const subToDiscordUserId = (sub: string) => {
  // discordのsubは`oauth2|discord|`から始まる
  // それ以外は弾く
  if (!sub.startsWith('oauth2|discord|')) {
    throw new Error('invalid sub. sub must start with `oauth2|discord|`')
  }
  return sub.replace('oauth2|discord|', '')
}
