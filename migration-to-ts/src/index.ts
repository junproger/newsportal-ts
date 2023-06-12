import App from './components/app/app';
import { typeApp } from './components/app/types/typeApp';

import './global.css';
import './assets/favicon.ico';

const app: typeApp = new App();
app.start();
