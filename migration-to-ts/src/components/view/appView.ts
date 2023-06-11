import News from './news/news';
import Sources from './sources/sources';

import { typeappView } from './types/typeappView';

import { articlesApi } from '../../types/articlesApi';
import { sourcesApi } from '../../types/sourcesApi';

export class AppView implements typeappView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: articlesApi): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourcesApi): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
