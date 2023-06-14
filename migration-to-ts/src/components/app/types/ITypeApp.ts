import AppController from '../../controller/controller';
import { ITypeAppView } from '../../view/types/ITypeAppView';

export interface ITypeApp {
    controller: AppController;
    view: ITypeAppView;
    start(): void;
}
