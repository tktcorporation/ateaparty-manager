export enum Role {
  admin = 'admin',
  confirmed = 'confirmed',
  member = 'member',
}
export type RoleType = keyof typeof Role
