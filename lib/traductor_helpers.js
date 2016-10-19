export function getUserName(users, userId) {
  var user = users.filter((usr) => usr.id === userId)[0]
  
  return (!user) ? undefined : user.name;
}

export function getChanNameById(channels, chanId) {

  return channels.filter((chan) => chan.id === chanId)[0];
}
