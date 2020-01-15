'use strict';

module.exports = () => {
  return async function jwt(ctx, next) {
    const token = ctx.request.headers.token;
    try {
      const res = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      ctx.request.jwtInfo = res;
    } catch (e) {
      ctx.body = {
        code: '1',
        msg: 'token无效',
      };
      return;
    }
    await next();
  };
};

