import AppController from '../../controller/controller';
import { typeAppView } from '../../view/types/typeAppView';

export interface typeApp {
    controller: AppController;
    view: typeAppView;
    start(): void;
}
