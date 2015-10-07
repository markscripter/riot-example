import fs from 'fs';
import path from 'path';

export default function writeStore({store, data}) {
  return fs.write('../_data/' + store + '.json', data, (err) => {
    return (err) ? 0 : 1;
  });
}
