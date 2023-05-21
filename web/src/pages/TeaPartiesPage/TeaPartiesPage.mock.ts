import { addDays } from 'date-fns'

export const standard = defineScenario({
  teaParty: {
    one: {
      data: {
        date: addDays(new Date(), 1),
        host: {
          create: {
            sub: 'oauth2|discord|000000000000000001',
            name: 'String',
            avatar: 'String',
          },
        },
      },
    },
    two: {
      data: {
        date: addDays(new Date(), 8),
        host: {
          create: {
            name: 'String',
            sub: 'oauth2|discord|000000000000000002',
            avatar: 'String',
          },
        },
        cohost: {
          create: {
            name: 'String',
            sub: 'oauth2|discord|000000000000000003',
            avatar: 'String',
          },
        },
      },
    },
  },
})
