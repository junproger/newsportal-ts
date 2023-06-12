import { articlesItems } from './articlesItems';

export interface articlesData {
    status: string;
    totalResults: number;
    articles: articlesItems[];
}
