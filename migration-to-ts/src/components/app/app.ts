import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { articlesData } from '../../types/articlesData';
import { sourcesData } from '../../types/sourcesData';
import { typeApp } from './types/typeApp';

class App implements typeApp {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        this.controller.getSources((data: sourcesData) => this.view.drawSources(data));

        const choiсeCategory: HTMLInputElement = <HTMLInputElement>document.querySelector('#category-choice');

        choiсeCategory
            ? choiсeCategory.addEventListener('change', () =>
                  this.controller.getCategories(choiсeCategory.value, (data: sourcesData) =>
                      this.view.drawSources(data)
                  )
              )
            : null;

        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');

        blockSources
            ? blockSources.addEventListener('click', (event: MouseEvent) =>
                  this.controller.getNews(event, (data: articlesData) => this.view.drawNews(data))
              )
            : null;
    }
}

export default App;
