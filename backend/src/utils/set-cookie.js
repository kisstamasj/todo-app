const dayjs = require('dayjs');

const setCookie = (res, key, cookie) => {
  res.cookie(key, cookie, {
    secure: process.env.NODE_ENV !== 'development',
    httpOnly: true,
    expires: dayjs().add(30, 'days').toDate(),
  });
};

module.exports = setCookie;
