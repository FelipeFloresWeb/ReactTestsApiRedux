import axios from 'axios';

export const getUsers = (email, password) => {
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

  if (haveUser) {
    return { currUser: haveUser };
  }

  return { message: 'User not found' };
};

export const userApi = async () => {
  const users = await axios.get('https://randomuser.me/api/');
  return users.data.results[0];
};

// /scr/api/UserList
