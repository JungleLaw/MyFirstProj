const Router = require('koa-router');
const home = require('./home-router');
const page = require('./page-router');
const sign = require('./sign-router');
const user = require('./user-router');

let routers = new Router();

routers.use(home.routes(), home.allowedMethods());
routers.use(page.routes(), page.allowedMethods());
routers.use(sign.routes(), sign.allowedMethods());
routers.use(user.routes(), user.allowedMethods());

module.exports = routers;