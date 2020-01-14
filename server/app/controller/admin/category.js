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
    const id = uuid().replace(/-/g, '');
    if (!name) {
      ctx.body = {
        code: '1',
        msg: '类别名称不能为空',
      };
      return;
    }
    const data = { id, name };
    const res = await ctx.service.category.add(data);
    if (res.affectedRows === 1) {
      ctx.body = {
        code: '0',
        msg: '新增成功',
      };
    } else {
      ctx.body = {
        code: '1',
        msg: '新增失败',
      };
    }
  }
}

module.exports = CategoryController;
