import { articleItem } from './articleItem';

export interface articlesData {
    status: string;
    totalResults: number;
    articles: articleItem[];
}
