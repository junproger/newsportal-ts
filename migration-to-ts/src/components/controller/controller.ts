import AppLoader from './appLoader';

import { sourcesData } from '../../types/sourcesData';
import { articlesApi } from '../../types/articlesApi';

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

    getNews(event: MouseEvent, callback: typeCallback<articlesApi>): void {
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
