import News from './news/news';
import Sources from './sources/sources';

import { typeappView } from './types/typeappView';

import { articlesApi } from '../../types/articlesApi';
import { sourcesData } from '../../types/sourcesData';

import { articlesItems } from '../../types/articlesItems';
import { sourcesItems } from '../../types/sourcesItems';

export class AppView implements typeappView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: articlesApi): void {
        const values: articlesItems[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourcesData): void {
        const values: sourcesItems[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
