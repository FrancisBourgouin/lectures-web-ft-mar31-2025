const authenticateThief = (thieves, email, password) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "Invalid email!", thief: null };
  }

  if (thief.password !== password) {
    return { error: "Invalid password!", thief: null };
  }

  return { error: null, thief };
};

const getThiefByEmail = (thieves, email) => {
  const thief = thieves[email];

  if (!thief) {
    return { error: "Invalid email!", thief: null };
  }

  return { error: null, thief };
};

const createThiefAccount = (thieves, thiefInfo) => {
  const { email, name, password, imagePath } = thiefInfo;

  // const email = thiefInfo.email
  // const name = thiefInfo.name
  // const password = thiefInfo.password
  // const imagePath = thiefInfo.imagePath

  const thief = thieves[email];

  if (thief) {
    return { error: "Invalid email! Thief already exists", thief: null };
  }

  if (!name | !email | !password | !imagePath) {
    return { error: "One of the fields is incomplete", thief: null };
  }

  const newId = Object.keys(thieves).length + 1;

  thiefInfo.id = newId;
  thieves[email] = thiefInfo;

  return { error: null, thief: thiefInfo };
};

module.exports = { authenticateThief, getThiefByEmail, createThiefAccount };

// const thief1 = {
//   id:"1",
//   name:"Arsène Lupin",
//   email:"gentleman@cambrioleur.com",
//   password:"tophat",
//   imagePath:"/arsene.gif"
// }

// const thief2 = {
//   id:"2",
//   name:"Doug Judy",
//   email:"pontiac@bandit.com",
//   password:"rosa",
//   imagePath:"/doug.webp"
// }

// const thieves = {
//   "gentleman@cambrioleur.com":thief1,
//   "pontiac@bandit.com":thief2
// }

// const result = authenticateThief(thieves, "pontiaac@bandit.com", "rosaa")

// console.log(result)
