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
      WHERE username = '${username}'
    `;
    const res = await this.app.mysql.query(sql);
    return res[0];
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
  async update(data) {
    const sql = `
      UPDATE user SET 
      ${data.username ? `username='${data.username}'${data.password ? ',' : ''}` : ''}
      ${data.password ? `password='${data.password}'` : ''}
      WHERE 
      id='${data.id}'
    `;
    console.log(sql, 1);
    const res = await this.app.mysql.query(sql);
    return res;
  }
  async delete(id) {
    const sql = `
      DELETE FROM user WHERE
      id='${id}'
    `;
    const res = await this.app.mysql.query(sql);
    return res;
  }
}

module.exports = UserService;
