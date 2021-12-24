import { Connection } from 'jsstore';

import workerInjector from 'jsstore/dist/worker_injector';

const connection = new Connection();

connection.addPlugin(workerInjector);

const todos = {
  name: 'todos',
  columns: {
    Id: {
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      notNull: true,
      dataType: 'string',
    },
    id: {
      notNull: true,
      dataType: 'number',
    },
    done: {
      notNull: true,
      dataType: 'boolean',
    },
    urgency: {
      notNull: true,
      dataType: 'string',
    },
  },
};

const db = {
  name: 'localDb',
  tables: [todos],
};

let isDbCreated;

(async () => { isDbCreated = await connection.initDb(db); })();

if (isDbCreated) {
  throw new Error('Something went wrong while creating a connection to IndexedDB');
} else {
  console.log('Connection to IndexedDB successful');
}

export default connection;
