import { TypeCallbackData } from './types/TypeCallbackData';
import { ITypeLoader } from './types/ITypeLoader';
import { TypeReqOptions } from './types/TypeReqOptions';
import { ITypeRequest } from './types/ITypeRequest';

class Loader implements ITypeLoader {
    public baseLink: string;
    public options: TypeReqOptions;

    constructor(baseLink: string, options: TypeReqOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: ITypeRequest,
        callback: TypeCallbackData<T> = () => {
            throw new Error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                throw new Error(res.statusText);
            }
        }

        return res;
    }

    makeUrl(options: TypeReqOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: TypeCallbackData<T>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => {
                callback(data);
            })
            .catch((err: Error) => {
                throw new Error(err.message);
            });
    }
}

export default Loader;
