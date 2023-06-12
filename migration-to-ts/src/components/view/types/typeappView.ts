import { typeNews } from './typeNews';
import { typeSources } from './typeSources';

import { articlesApi } from '../../../types/articlesApi';
import { sourcesData } from '../../../types/sourcesData';

export interface typeappView {
    news: typeNews;
    sources: typeSources;
    drawNews(data: articlesApi): void;
    drawSources(data: sourcesData): void;
}
