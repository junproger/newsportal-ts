import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { IArticlesData } from '../../types/IArticlesData';
import { ISourcesData } from '../../types/ISourcesData';
import { ITypeApp } from './types/ITypeApp';

class App implements ITypeApp {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        this.controller.getSources((data: ISourcesData) => this.view.drawSources(data));

        const choiсeCategory: HTMLInputElement = <HTMLInputElement>document.querySelector('#category-choice');

        choiсeCategory
            ? choiсeCategory.addEventListener('change', () =>
                  this.controller.getCategories(choiсeCategory.value, (data: ISourcesData) =>
                      this.view.drawSources(data)
                  )
              )
            : null;

        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');

        blockSources
            ? blockSources.addEventListener('click', (event: MouseEvent) =>
                  this.controller.getNews(event, (data: IArticlesData) => this.view.drawNews(data))
              )
            : null;
    }
}

export default App;
