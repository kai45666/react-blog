'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async get() {
    const sql = `
      SELECT (
        id,
        username,
        type
      )
      FROM
      user
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
  async find(username) {
    const sql = `
      SELECT 
      *
      FROM
      user
      WHERE username = ${username}
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
  async add(data) {
    const sql = `
      INSERT INTO user VALUES(
        '${data.id}',
        '${data.username}',
        '${data.password}',
        '${data.type}'
      )
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
