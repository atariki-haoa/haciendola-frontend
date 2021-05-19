import { environment } from '../environments/environment';

const value = (environment.production) ? 'https://0.0.0.0/' : 'http://localhost/api';

export const GLOBAL = {
    url: value,
};
