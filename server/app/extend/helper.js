'use strict';

module.exports = {
  validate(key, value, validate) {
    const { ctx } = this;
    if (/required/.test(validate)) {
      if (!value) {
        ctx.body = {
          code: '1',
          msg: `${key} 不能为空`,
        };
        return;
      }
    }
    if (/string/.test(validate)) {
      if (typeof value !== 'string') {
        ctx.body = {
          code: '1',
          msg: `${key} 必须为字符串类型`,
        };
        return;
      }
    }
    if (/number/.test(validate)) {
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
};
