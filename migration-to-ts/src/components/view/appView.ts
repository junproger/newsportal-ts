import News from './news/news';
import Sources from './sources/sources';

import { typeAppView } from './types/typeAppView';

import { articlesData } from '../../types/articlesData';
import { sourcesData } from '../../types/sourcesData';

import { articleItem } from '../../types/articleItem';
import { sourceItem } from '../../types/sourceItem';

export class AppView implements typeAppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: articlesData): void {
        const values: articleItem[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: sourcesData): void {
        const values: sourceItem[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
