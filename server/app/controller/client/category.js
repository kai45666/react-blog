'use strict';

const Controller = require('egg').Controller;

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
}

module.exports = CategoryController;
