import { typeNews } from './typeNews';
import { typeSources } from './typeSources';

import { articlesData } from '../../../types/articlesData';
import { sourcesData } from '../../../types/sourcesData';

export interface typeAppView {
    news: typeNews;
    sources: typeSources;
    drawNews(data: articlesData): void;
    drawSources(data: sourcesData): void;
}
