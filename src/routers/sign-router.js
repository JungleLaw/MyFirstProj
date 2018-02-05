const router = require('koa-router');
const User = require('../entity/User');
const querystring = require('querystring');

let sign = new router();

sign.get('/signIn', async (ctx, next) => {
    console.log('signIn');
    let username = querystring.parse(ctx.request.querystring)["username"];
    let password = querystring.parse(ctx.request.querystring)["password"];
    let data = await User.insertUser(username, password);
    ctx.state.html = data;
    await next();
});

sign.get('/signUp', async (ctx, next) => {
    console.log('signUp');
    ctx.state.html = 'signUp';
    await next();
});

sign.get('/signOut', async (ctx, next) => {
    console.log('signOut');
    ctx.state.html = 'signOut';
    await next();
});

sign.get('/signInWithQRCode', async (ctx, next) => {
    console.log('signInWithQRCode');
    ctx.state.html = 'signInWithQRCode';
    await next();
});

module.exports = sign;