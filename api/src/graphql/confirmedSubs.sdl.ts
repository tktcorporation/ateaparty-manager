import { Role } from 'src/lib/auth'

export const schema = gql`
  type ConfirmedSub {
    id: Int!
    sub: String!
  }

  type Query {
    confirmedSubs: [ConfirmedSub!]! @requireAuth(roles: "${Role.admin}")
    confirmedSub(id: Int!): ConfirmedSub @requireAuth(roles: "${Role.admin}")
    confirmedSubBySub(sub: String!): ConfirmedSub @requireAuth(roles: "${Role.confirmed}")
  }

  input CreateConfirmedSubInput {
    sub: String!
  }

  input UpdateConfirmedSubInput {
    sub: String
  }

  type Mutation {
    createConfirmedSub(input: CreateConfirmedSubInput!): ConfirmedSub!
      @requireAuth(roles: "${Role.admin}")
    updateConfirmedSub(
      id: Int!
      input: UpdateConfirmedSubInput!
    ): ConfirmedSub! @requireAuth(roles: "${Role.admin}")
    deleteConfirmedSub(id: Int!): ConfirmedSub! @requireAuth(roles: "${Role.admin}")
  }
`
