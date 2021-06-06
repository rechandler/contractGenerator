export const isSuperAdmin = user => {
  return user.roles.include('superadmin')
}

export const isAdmin = user => {
  return user.roles.include('admin')
}


