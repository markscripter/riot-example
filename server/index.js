import Koa from 'koa';
import recipeService from './services/recipes';
import helmet from 'koa-helmet';
import koaBody from 'koa-better-body';
import serve from 'koa-static';
import path from 'path';

const app = Koa();

// security headers
app.use(helmet());

// body parser
app.use(koaBody({
  extendTypes: {
    json: ['application/x-javascript'],
    multipart: ['multipart/mixed'],
  },
}));

// Static Files
app.use(serve('./public'));

// Recipe Service Routes
app.use(recipeService.routes());
app.use(recipeService.allowedMethods());

app.listen(8080);
