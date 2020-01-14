'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/category/get', controller.admin.category.get);
  router.post('/admin/category/add', controller.admin.category.add);
};
