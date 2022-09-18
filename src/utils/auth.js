import usersData from "../data/users.json";


export const verifyUser = (username, password) => {
  const exists = isUserExists(username);
  if (exists) {
    if(verifyUserPass(exists, password)) {
        return { status: true, message: "Login Success" };
    } else {
        return { status: false, message: "Incorrect Password. Please Try Again" };
    }
  } else {
    return { status: false, message: "No User Found With This Username" };
  }
};

const isUserExists = (username) => {
  for (let user of usersData) {
    if (user.username === username.toLowerCase()) {
      return user;
    }
  }
  return false;
};

const verifyUserPass = (user, enteredPassword) => {
  if (user.password === enteredPassword) {
    return true;
  } else {
    return false;
  }
};
