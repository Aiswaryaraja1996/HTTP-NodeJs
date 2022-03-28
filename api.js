const users = [
  "Amal",
  "Antony",
  "Abhirami",
  "Nimisha",
  "Lakshmi",
  "Roopa",
  "Abhijeet",
  "Swati",
  "Asna",
  "Keerthi",
];

function getAllUsers(page = 1) {
  const start = (page - 1) * 3;
  const end = start + 3;
  return users.slice(start, end);
}

function getUser(index) {
  if (index > 0 && index <= users.length) {
    return users[index - 1];
  } else {
    return "Invalid User";
  }
}

function addUser(user) {
  users.push(user);
}

module.exports = { getAllUsers, getUser, addUser };
