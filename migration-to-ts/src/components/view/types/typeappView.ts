import { typeNews } from './typeNews';
import { typeSources } from './typeSources';

import { articlesApi } from '../../../types/articlesApi';
import { sourcesApi } from '../../../types/sourcesApi';

export interface typeappView {
    news: typeNews;
    sources: typeSources;
    drawNews(data: articlesApi): void;
    drawSources(data: sourcesApi): void;
}
