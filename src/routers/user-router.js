const router = require('koa-router');
const User = require('../entity/User')

let user = new router();

user.get('/user', async (ctx, next) => {
    console.log('user');
    let data = await User.findUserById(1);
    ctx.state.html = data;
    await next();
});
user.get('/users', async (ctx, next) => {
    console.log('users');
    let data = await User.findAll();
    ctx.state.html = data;
    await next();
});

module.exports = user;