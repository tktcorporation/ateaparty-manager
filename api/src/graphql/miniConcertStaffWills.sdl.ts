import { Role } from 'src/lib/auth'

export const schema = gql`
  type MiniConcertStaffWill {
    id: Int!
    staffWill: Boolean!
    staffWantToDo: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    member: Member!
    memberId: Int!
  }

  type Query {
    miniConcertStaffWills: [MiniConcertStaffWill!]! @requireAuth(roles: "${Role.admin}")
    miniConcertStaffWill: MiniConcertStaffWill @requireAuth
  }

  input UpsertMiniConcertStaffWillInput {
    staffWill: Boolean
    staffWantToDo: String
  }

  type Mutation {
    upsertMiniConcertStaffWill(
      input: UpsertMiniConcertStaffWillInput!
    ): MiniConcertStaffWill! @requireAuth(roles: "${Role.member}")
  }
`
