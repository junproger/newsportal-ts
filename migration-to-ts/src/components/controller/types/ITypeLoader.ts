import { TypeCallbackData } from './TypeCallbackData';
import { TypeReqOptions } from './TypeReqOptions';
import { ITypeRequest } from './ITypeRequest';

export interface ITypeLoader {
    baseLink: string;
    options?: TypeReqOptions;
    getResp<T>({ endpoint, options = {} }: ITypeRequest, callback: TypeCallbackData<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: TypeReqOptions, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: TypeCallbackData<T>, options: TypeReqOptions): void;
}
