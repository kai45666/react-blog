'use strict';

const Controller = require('egg').Controller;
const uuid = require('uuid/v1');
const bcrypt = require('bcryptjs');

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
    const hashPassword = bcrypt.hashSync(password, 10);
    const data = { id, username, password: hashPassword, type: 1 };
    const res = await ctx.service.user.add(data);
    if (!res.affectedRows === 1) {
      ctx.body = {
        code: '1',
        msg: '注册失败',
      };
      return;
    }
    ctx.body = {
      code: '0',
      msg: '注册成功',
    };
  }
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    ctx.helper.validate('username', username, 'required string');
    ctx.helper.validate('password', password, 'required string');
    if (ctx.body) {
      return;
    }
    const res = await ctx.service.user.find(username);
    if (!res) {
      ctx.body = {
        code: '1',
        msg: `${username} 用户名不存在`,
      };
      return;
    }
    const pwdValidate = bcrypt.compareSync(password, res.password);
    if (!pwdValidate) {
      ctx.body = {
        code: '1',
        msg: '密码错误',
      };
      return;
    }
    const token = ctx.helper.jwtSign({ id: res._id, username, type: res.type });
    ctx.body = {
      code: '0',
      msg: '登录成功',
      data: {
        username,
        token,
      },
    };
  }
}

module.exports = UserController;
