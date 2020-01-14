'use strict';

module.exports = app => {
  return async function jwt(ctx, next) {
    const token = ctx.request.headers.token;
    try {
      const res = await app.jwt.verify(token, app.config.jwt.secret);
      ctx.request.jwtInfo = res;
      await next();
    } catch (e) {
      ctx.body = {
        code: '1',
        msg: 'token无效',
      };
    }
  };
};

