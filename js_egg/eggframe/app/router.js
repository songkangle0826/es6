'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 用户
    router.post('/api/users/sigup', controller.users.sigup);
    router.post('/api/users/sigin', controller.users.sigin);
    router.get('/api/users/sigout', controller.users.sigout);
  
    router.resources('categories','/api/categories',controller.category);
    // router.get('/api/categories',controller.categories.index);
    // router.post('/api/categories',controller.categories.create);
    // router.put('/api/categories/:id',controller.categories.update);
    // router.delete('/api/categories/:id',controller.categories.destroy);
    
    router.resources('articles','/api/articles',controller.articles);
    router.get('/api/articles/pv/:id',controller.articles.addPv)
    router.post('/api/articles/comment/:id',controller.articles.addComment);
    router.post('/api/articles/deleteComment',controller.articles.deleteComment)
};
