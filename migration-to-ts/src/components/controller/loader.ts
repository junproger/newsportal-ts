import { typeCallback } from './types/typeCallback';
import { typeLoader } from './types/typeLoader';
import { typeOptions } from './types/typeOptions';
import { typeRequest } from './types/typeRequest';

class Loader implements typeLoader {
    public baseLink: string;
    public options: typeOptions;

    constructor(baseLink: string, options: typeOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: typeRequest,
        callback: typeCallback<T> = () => {
            console.error('No callback for GET response');
            throw new Error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: typeOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: typeCallback<T>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => {
                console.log(data);
                callback(data);
            })
            .catch((err: Error) => {
                throw Error(err.message);
            });
    }
}

export default Loader;
