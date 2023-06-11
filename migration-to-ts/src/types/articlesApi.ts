import { articlesItems } from './articlesItems';

export interface articlesApi {
    status: string;
    totalResults: number;
    articles: articlesItems[];
}
