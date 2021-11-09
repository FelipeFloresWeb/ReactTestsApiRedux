const getUsers = (email, password) => {
  console.log(email, password);
  const users = [{
    userId: 1,
    name: 'user 1',
    password: '123456',
    email: 'email1@email.com',
  },
  {
    userId: 2,
    name: 'user 2',
    password: '123456',
    email: 'email2@email.com',
  },
  {
    userId: 3,
    name: 'user 3',
    password: '123456',
    email: 'email3@email.com',
  },
  {
    userId: 4,
    name: 'user 4',
    password: '123456',
    email: 'email4@email.com',
  },
  {
    userId: 5,
    name: 'user 5',
    password: '123456',
    email: 'email5@email.com',
  },
  {
    userId: 6,
    name: 'user 6',
    password: '123456',
    email: 'email6@email.com',
  }];

  const haveUser = users.find((user) => user.email === email && user.password === password);
  console.log(haveUser);
  if (haveUser) {
    return { currUser: haveUser };
  }

  return { message: 'User not found' };
};

export default getUsers;
