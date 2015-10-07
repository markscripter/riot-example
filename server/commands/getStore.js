import path from 'path';

export default function getStore({store}) {
  return require('../_data/' + store + '.json');
};
