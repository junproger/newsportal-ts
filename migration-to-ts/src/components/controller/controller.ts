import AppLoader from './appLoader';
import { EnumReqApi } from './enums/EnumReqApi';

import { ISourcesData } from '../../types/ISourcesData';
import { IArticlesData } from '../../types/IArticlesData';

import { TypeCallbackData } from './types/TypeCallbackData';

class AppController extends AppLoader {
    getSources(callback: TypeCallbackData<ISourcesData>): void {
        super.getResp(
            {
                endpoint: EnumReqApi.endPoint1,
            },
            callback
        );
    }

    getCategories(category: string, callback: TypeCallbackData<ISourcesData>): void {
        super.getResp(
            {
                endpoint: EnumReqApi.endPoint1,
                options: {
                    category: category,
                },
            },
            callback
        );
    }

    getNews(event: MouseEvent, callback: TypeCallbackData<IArticlesData>): void {
        let target: HTMLElement = <HTMLElement>event.target;
        const newsContainer: HTMLElement = <HTMLElement>event.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: EnumReqApi.endPoint2,
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
