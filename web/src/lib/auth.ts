export enum Role {
  admin = 'admin',
  confirmed = 'confirmed',
}
export type RoleType = keyof typeof Role
