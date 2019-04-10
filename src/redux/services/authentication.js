import jwt from 'jsonwebtoken';

const jwtSecret = 'g-/veronica';

const users = [
  {
    id: 1,
    email: 'test001@dummy.com',
    password: '123456'
  },
  {
    id: 2,
    email: 'test002@dummy.com',
    password: '123456'
  },
  {
    id: 3,
    email: 'test003@dummy.com',
    password: '123456'
  }
];

const getUser = credentials => {
  const { email, password } = credentials;

  for(let i in users) {
    if(users[i].email === email && users[i].password === password) {
      return users[i];
    }
  }

  return null;
}

export const authenticate = credentials => {
  return new Promise((resolve, reject) => {
    const user = getUser(credentials);
    if(user) {
      const payload = {
        username: user.email,
        role: 'system-developer',
        email: user.email
      };

      payload.token = jwt.sign(payload, jwtSecret);
      resolve(payload);
    } else {
      reject('Invalid credentials! Please try again');
    }

  });
}

export const me = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      resolve(decoded);
    });
  });
}