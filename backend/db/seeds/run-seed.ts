import seed from './seed';
import {client} from './connection';

seed()
    .catch(error => console.error(error))
    .finally(() => client.close());