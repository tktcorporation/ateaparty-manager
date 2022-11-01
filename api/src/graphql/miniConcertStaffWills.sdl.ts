import { Role } from 'src/lib/auth'

export const schema = gql`
  type MiniConcertStaffWill {
    id: Int!
    StaffWantToDo: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    member: Member!
    memberId: Int!
  }

  type Query {
    miniConcertStaffWills: [MiniConcertStaffWill!]! @requireAuth(roles: "${Role.admin}")
    miniConcertStaffWill: MiniConcertStaffWill @requireAuth
  }

  input CreateMiniConcertStaffWillInput {
    StaffWantToDo: String!
  }

  input UpdateMiniConcertStaffWillInput {
    StaffWantToDo: String
    memberId: Int
  }

  type Mutation {
    createMiniConcertStaffWill(
      input: CreateMiniConcertStaffWillInput!
    ): MiniConcertStaffWill! @requireAuth(roles: "${Role.member}")
    updateMiniConcertStaffWill(
      input: UpdateMiniConcertStaffWillInput!
    ): MiniConcertStaffWill! @requireAuth(roles: "${Role.member}")
    deleteMiniConcertStaffWill(id: Int!): MiniConcertStaffWill! @requireAuth(roles: "${Role.admin}")
  }
`
