import Loader from './loader';
import { EnumReqApi } from './enums/EnumReqApi';

class AppLoader extends Loader {
    constructor() {
        super(EnumReqApi.prxUrl1, {
            apiKey: EnumReqApi.apiKey1,
        });
    }
}

export default AppLoader;
