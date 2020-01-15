'use strict';

const Controller = require('egg').Controller;
const uuid = require('uuid/v1');

class CategoryController extends Controller {
  async get() {
    const { ctx } = this;
    const res = await ctx.service.category.get();
    ctx.body = {
      code: '0',
      msg: '获取成功',
      data: res,
    };
  }
  async add() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    ctx.helper.validate('name', name, 'required string');
    if (ctx.body) {
      return;
    }
    const id = uuid().replace(/-/g, '');
    const data = { id, name };
    const res = await ctx.service.category.add(data);
    if (res.affectedRows !== 1) {
      ctx.body = {
        code: '1',
        msg: '新增失败',
      };
      return;
    }
    ctx.body = {
      code: '0',
      msg: '新增成功',
    };
  }
  async update() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    ctx.helper.validate('id', id, 'required string');
    ctx.helper.validate('name', name, 'required string');
    if (ctx.body) {
      return;
    }
    const data = { id, name };
    const res = await ctx.service.category.update(data);
    if (res.affectedRows !== 1) {
      ctx.body = {
        code: '1',
        msg: '更新失败',
      };
      return;
    }
    ctx.body = {
      code: '0',
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
    const res = await ctx.service.category.delete(id);
    if (res.affectedRows !== 1) {
      ctx.body = {
        code: '1',
        msg: '删除失败',
      };
      return;
    }
    ctx.body = {
      code: '0',
      msg: '删除成功',
    };
  }
}

module.exports = CategoryController;
