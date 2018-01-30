const router = require('koa-router');

let home = new router();

home.get('/', async (ctx, next) => {
    console.log('home get');
    //   let html = `
    //   <ul>
    //     <li><a href="/page/page">/page/helloworld</a></li>
    //     <li><a href="/page/404">/page/404</a></li>
    //   </ul>
    // `;
    //   ctx.state.html = html;
    //   await next();
    let title = 'Index';
    await ctx.render('Index', {
        title,
    });
});
home.get('home', async (ctx, next) => {
    console.log('home get');
    let html = `
    <ul>
      <li><a href="/page/page">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `;
    ctx.state.html = html;
    await next();
});
module.exports = home;

