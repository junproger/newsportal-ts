import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('http://127.0.0.1:8075/', {
            apiKey: 'be32012c2d38403794144aeaf00a8297',
        });
    }
}

export default AppLoader;
