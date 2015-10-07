import riot from 'riot';
import main from './components/main';
import dispatcher from './utilities/dispatcher';

riot.mount('main', {dispatcher});
