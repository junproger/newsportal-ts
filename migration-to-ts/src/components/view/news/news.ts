import { IArticleItem } from '../../../types/IArticleItem';
import { ITypeNews } from './../types/ITypeNews';

import '../../../assets/placeholder2.png';

import './news.css';

class News implements ITypeNews {
    public draw(data: IArticleItem[]): void {
        const ITEMS_PER_PAGE = 10;

        const news: IArticleItem[] =
            data.length >= ITEMS_PER_PAGE
                ? data.filter((_item: IArticleItem, idx: number): boolean => idx < ITEMS_PER_PAGE)
                : data;

        const fragment: DocumentFragment = <DocumentFragment>document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: IArticleItem, idx: number): void => {
            const newsClone: HTMLTemplateElement = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || './assets/placeholder2.png'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description || '';
            (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const blockNews: HTMLElement = <HTMLElement>document.querySelector('.news');
        blockNews ? (blockNews.innerHTML = '') : null;
        blockNews ? blockNews.appendChild(fragment) : null;
    }
}

export default News;
