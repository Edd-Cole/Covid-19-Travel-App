import seed from './seed';
import {client} from './connection';
import {countryData, userData} from '../data/development_data/index';

seed(countryData, userData)
    .catch(error => console.error(error))
    .finally(() => client.close());