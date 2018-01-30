const Router = require('koa-router');
const home = require('./home-router');
const page = require('./page-router');

let routers = new Router();

routers.use('/', home.routes(), home.allowedMethods());
routers.use('/page', page.routes(), page.allowedMethods());

module.exports = routers;