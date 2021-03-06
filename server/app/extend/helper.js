'use strict';

module.exports = {
  validate(key, value, validate) {
    const { ctx } = this;
    if (/required/.test(validate) && !value) {
      ctx.body = {
        code: '1',
        msg: `${key} 不能为空`,
      };
      return;
    }
    if (/string/.test(validate) && value) {
      if (typeof value !== 'string') {
        ctx.body = {
          code: '1',
          msg: `${key} 必须为字符串类型`,
        };
        return;
      }
    }
    if (/number/.test(validate) && value) {
      if (typeof value !== 'number') {
        ctx.body = {
          code: '1',
          msg: `${key} 必须为数值类型`,
        };
        return;
      }
    }
  },
  response(rule, successText, errText) {
    const { ctx } = this;
    if (rule) {
      ctx.body = {
        code: '0',
        msg: successText,
      };
    } else {
      ctx.body = {
        code: '1',
        msg: errText,
      };
    }
  },
  jwtSign(data) {
    const token = this.app.jwt.sign(data, this.app.config.jwt.secret, { expiresIn: 60 * 60 });
    return token;
  },
};
