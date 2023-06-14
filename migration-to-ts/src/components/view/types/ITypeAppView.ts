import { ITypeNews } from './ITypeNews';
import { ITypeSources } from './ITypeSources';

import { IArticlesData } from '../../../types/IArticlesData';
import { ISourcesData } from '../../../types/ISourcesData';

export interface ITypeAppView {
    news: ITypeNews;
    sources: ITypeSources;
    drawNews(data: IArticlesData): void;
    drawSources(data: ISourcesData): void;
}
