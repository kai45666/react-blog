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
    ctx.helper.response(res.affectedRows === 1, '新增成功', '新增失败');
  }
}

module.exports = CategoryController;
