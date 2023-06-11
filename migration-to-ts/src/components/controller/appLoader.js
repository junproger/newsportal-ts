import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // proxy https://news-proxy.spanb4.shop/ (local http://127.0.0.1:8075/)
        super('http://127.0.0.1:8075/', {
            apiKey: 'be32012c2d38403794144aeaf00a8297', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
