'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
  async get() {
    const sql = `
      SELECT 
      *
      FROM
      category
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
  async add(data) {
    const sql = `
      INSERT INTO category VALUES(
        '${data.id}',
        '${data.name}'
      )
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = CategoryService;
