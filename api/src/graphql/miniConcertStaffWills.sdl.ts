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
    miniConcertStaffWills: [MiniConcertStaffWill!]! @requireAuth
    miniConcertStaffWill(id: Int!): MiniConcertStaffWill @requireAuth
  }

  input CreateMiniConcertStaffWillInput {
    StaffWantToDo: String!
    memberId: Int!
  }

  input UpdateMiniConcertStaffWillInput {
    StaffWantToDo: String
    memberId: Int
  }

  type Mutation {
    createMiniConcertStaffWill(
      input: CreateMiniConcertStaffWillInput!
    ): MiniConcertStaffWill! @requireAuth
    updateMiniConcertStaffWill(
      id: Int!
      input: UpdateMiniConcertStaffWillInput!
    ): MiniConcertStaffWill! @requireAuth
    deleteMiniConcertStaffWill(id: Int!): MiniConcertStaffWill! @requireAuth
  }
`
