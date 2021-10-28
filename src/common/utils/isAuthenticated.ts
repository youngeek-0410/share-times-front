const isAuthenticated = (): boolean => {
  if (localStorage.getItem('token')) return true
  else return false
}

export default isAuthenticated
