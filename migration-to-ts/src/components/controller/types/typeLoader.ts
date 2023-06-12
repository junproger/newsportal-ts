import { typeCallback } from './typeCallback';
import { typeOptions } from './typeOptions';
import { typeRequest } from './typeRequest';

export interface typeLoader {
    baseLink: string;
    options?: typeOptions;
    getResp<T>({ endpoint, options = {} }: typeRequest, callback: typeCallback<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: typeOptions, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: typeCallback<T>, options: typeOptions): void;
}
