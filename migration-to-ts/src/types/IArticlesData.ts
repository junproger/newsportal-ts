import { IArticleItem } from './IArticleItem';

export interface IArticlesData {
    status: string;
    totalResults: number;
    articles: IArticleItem[];
}
