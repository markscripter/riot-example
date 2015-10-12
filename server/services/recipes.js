import koaRouter from 'koa-router';
import JSONstream from 'streaming-json-stringify';
import cmd from '../commands';

const router = koaRouter({
  prefix: '/recipes',
});

router.get('/', function*(next) {
  this.type = 'json';
  this.body = cmd.getStore({store: 'recipes'});
});

router.get('/:id', function*(next) {
  this.type = 'json';
  this.body = cmd.getStoreById({store: 'recipes', id: this.params.id});
});

router.post('/', function*(next) {
  // ...
});

router.put('/:id', function*(next) {
  // ...
});

router.del('/:id', function*(next) {
  // ...
});

export default router;
