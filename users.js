const users = ['oleg', 'sasha', 'petya']

const newUser = 'ivan'

users.push(newUser)


function logUsers(users) {
  users.forEach(console.log)
}

function uppercaseUsers(users) {
  return users.map((user) => user.toUpperCase())
}