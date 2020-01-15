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
  async update(data) {
    const sql = `
      UPDATE category SET
      name='${data.name}'
      WHERE
      id='${data.id}'
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
  async delete(id) {
    const sql = `
      DELETE FROM category WHERE
      id='${id}'
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = CategoryService;
