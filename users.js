const users = ['oleg', 'sasha', 'petya']

const newUser = 'ivan'

users.push(newUser)

function uppercaseUsers(users) {
  return users.map((user) => user.toUpperCase())
} 