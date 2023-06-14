import News from './news/news';
import Sources from './sources/sources';

import { ITypeAppView } from './types/ITypeAppView';

import { IArticlesData } from '../../types/IArticlesData';
import { ISourcesData } from '../../types/ISourcesData';

import { IArticleItem } from '../../types/IArticleItem';
import { ISourceItem } from '../../types/ISourceItem';

export class AppView implements ITypeAppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IArticlesData): void {
        const values: IArticleItem[] = data.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ISourcesData): void {
        const values: ISourceItem[] = data.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
