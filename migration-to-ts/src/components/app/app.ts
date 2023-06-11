import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { articlesApi } from '../../types/articlesApi';
import { sourcesApi } from '../../types/sourcesApi';

class App {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');

        blockSources.addEventListener('click', (event: MouseEvent) =>
            this.controller.getNews(event, (data: articlesApi) => this.view.drawNews(data))
        );
        this.controller.getSources((data: sourcesApi) => this.view.drawSources(data));
    }
}

export default App;
