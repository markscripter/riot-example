import path from 'path';
import writeStore from './writeStore';

export default function replaceStore({store, data}) {
  return writeStore({store, data});
};
