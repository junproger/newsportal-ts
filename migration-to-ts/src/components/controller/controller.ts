import AppLoader from './appLoader';

import { sourcesData } from '../../types/sourcesData';
import { articlesData } from '../../types/articlesData';

import { typeCallback } from './types/typeCallback';

class AppController extends AppLoader {
    getSources(callback: typeCallback<sourcesData>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getCategories(category: string, callback: typeCallback<sourcesData>): void {
        super.getResp(
            {
                endpoint: 'sources',
                options: {
                    category: category,
                },
            },
            callback
        );
    }

    getNews(event: MouseEvent, callback: typeCallback<articlesData>): void {
        let target: HTMLElement = <HTMLElement>event.target;
        const newsContainer: HTMLElement = <HTMLElement>event.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
