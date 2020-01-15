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
    if (res.affectedRows !== 1) {
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
  async update() {
    const { ctx } = this;
    const { id, username, password } = ctx.request.body;
    ctx.helper.validate('id', id, 'required string');
    ctx.helper.validate('username', username, 'string');
    ctx.helper.validate('password', password, 'string');
    if (ctx.body) {
      return;
    }
    const hashPassword = password && bcrypt.hashSync(password, 10);
    const data = { id, username, password: hashPassword };
    const res = await ctx.service.user.update(data);
    if (res.affectedRows !== 1) {
      ctx.body = {
        code: '1',
        msg: '更新失败',
      };
      return;
    }
    ctx.body = {
      code: '1',
      msg: '更新成功',
    };
  }
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    ctx.helper.validate('id', id, 'required string');
    if (ctx.body) {
      return;
    }
    const res = await ctx.service.user.delete(id);
    if (res.affectedRows !== 1) {
      ctx.body = {
        code: '1',
        msg: '删除失败',
      };
      return;
    }
    ctx.body = {
      code: '1',
      msg: '删除成功',
    };
  }
}

module.exports = UserController;
