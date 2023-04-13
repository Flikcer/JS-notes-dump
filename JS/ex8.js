//ex for adding user to mongoDB, tell user not happenin if already exists

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

function signUp(id, user, email, pass, login) {
  for (let user of users) {
    console.log(email, user.email);
    if (email == user.email) {
      return "Email already exists";
    }
  }
  const newUser = {
    _id: id,
    username: user,
    email: email,
    password: pass,
    createdAt: Date.now(),
    isLoggedIn: login,
  };
  users.push(newUser);
  return users;
}
console.log(users);
console.log(signUp("ajdha", "Paul", "thomas@thomas.com", "sklfs", false)); //will fail since email already exists
console.log(signUp("ajdha", "Paul", "thomas@thomas.net", "sklfs", false)); //will not fail since email doesnt exist
console.log(users);

// users.filter(user => {
//     console.log(email, user.email);
//     return email === user.email;
// })
