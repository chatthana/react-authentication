import jwt from 'jsonwebtoken';

const jwtSecret = 'g-/veronica';

export const authenticate = credentials => {
  const { email, password } = credentials;

  return new Promise((resolve, rejecy) => {
    const payload = {
      user: 'testuser',
      role: 'system-developer',
      email,
      createAt: Date.now()
    };

    const token = jwt.sign(payload, jwtSecret);

    payload.token = token;

    setTimeout(() => {
      resolve(payload);
    }, 2000);

  });
}

export const me = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      resolve(decoded);
    });
  });
}