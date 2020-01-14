'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt();
  router.post('/admin/user/reg', controller.admin.user.reg);
  router.get('/admin/category/get', controller.admin.category.get);
  router.post('/admin/category/add', jwt, controller.admin.category.add);
};
