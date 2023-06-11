import AppController from '../../controller/controller';
import { typeappView } from '../../view/types/typeappView';

export interface typeApp {
    controller: AppController;
    view: typeappView;
    start(): void;
}
