import path from 'path';
import getStore from './getStore';

export default function getStoreById({store, id}) {
  return getStore({store}).filter((item) => {
    return item.id === id;
  });
};
