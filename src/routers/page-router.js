const router = require('koa-router');

let page = new router();

page.get('/404', async (ctx, next) => {
    console.log('404 get');
    ctx.state.html = '404 page!';
    await next();
});
page.get('/page', async (ctx, next) => {
    console.log('page get');
    ctx.state.html = 'Hello world, page! ';
    await next();
});

module.exports = page;