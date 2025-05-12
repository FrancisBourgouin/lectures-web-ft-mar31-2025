const createUser = (name, email, isAdmin, password, nickname, emailConfirmation) => {
  // ...
};

createUser("Bob", "email@email.com", null, null, null, "email@email.com");



// What is userInfo: is an object
// What name would you call isAdmin, password, emailConfirmation: keys/properties of userInfo
// PROPS!

const createUserButBetter = (props) => {
  const { name, email, isAdmin, password, nickname, emailConfirmation } = props;

  // ...
};

createUserButBetter({ name: "bob", nickname: "YEAH", email: "email@bob.com" });



header