const encrypt = require('./script');

const payload = { userId: 101, role: 'user' };
const secret = 'my_super_secret';

const token = encrypt(payload, secret);

console.log('JWT with Expiry:', token);
