import type { APIGatewayEvent, Context } from 'aws-lambda'

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
    orderBy: { scheduledAt: 'desc' },
    include: {
      teaPartyStaff: {
        include: {
          mcStaff: true,
          mcSubStaff: true,
        },
      },
    },
    take: 2,
  })
  const result = teaParties.map((teaParty) => ({
    scheduledAt: teaParty.scheduledAt,
    mcStaff: {
      name: teaParty.teaPartyStaff.mcStaff.name,
    },
    mcSubStaff: teaParty.teaPartyStaff.mcSubStaff && {
      name: teaParty.teaPartyStaff.mcSubStaff.name,
    },
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
