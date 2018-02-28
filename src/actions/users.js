export const fetchUsers = allUsers => {
  return {
    type: 'FETCH_USERS',
    allUsers: allUsers
  }
}

export const addUser = user => {
  return {
    type: 'ADD_USER',
    user: user 
  }
}

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',  
    user: user
  }
}