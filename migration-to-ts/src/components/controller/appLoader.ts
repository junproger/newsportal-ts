import Loader from './loader';
import { enumApi } from './enums/enumApi';

class AppLoader extends Loader {
    constructor() {
        super(enumApi.prxUrl1, {
            apiKey: enumApi.apiKey1,
        });
    }
}

export default AppLoader;
