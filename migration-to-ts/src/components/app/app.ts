import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { articlesApi } from '../../types/articlesApi';
import { sourcesApi } from '../../types/sourcesApi';
import { typeApp } from './types/typeApp';

class App implements typeApp {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');

        blockSources
            ? blockSources.addEventListener('click', (event: MouseEvent) =>
                  this.controller.getNews(event, (data: articlesApi) => this.view.drawNews(data))
              )
            : null;

        this.controller.getSources((data: sourcesApi) => this.view.drawSources(data));
    }
}

export default App;
