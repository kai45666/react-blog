'use strict';

const Controller = require('egg').Controller;
const uuid = require('uuid/v1');

class UserController extends Controller {
  async reg() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    ctx.helper.validate('username', username, 'required string');
    ctx.helper.validate('password', password, 'required string');
    if (ctx.body) {
      return;
    }
    const id = uuid().replace(/-/g, '');
    const data = { id, username, password, type: 1 };
    const res = await ctx.service.user.add(data);
    if (res.affectedRows === 1) {
      const token = ctx.helper.jwtSign({ id, username });
      ctx.body = {
        code: '0',
        msg: '注册成功',
        data: {
          token,
        },
      };
    } else {
      ctx.body = {
        code: '1',
        msg: '注册失败',
      };
    }
  }
  async login() {
    const { ctx } = this;
    ctx.body = 'login';
  }
}

module.exports = UserController;
