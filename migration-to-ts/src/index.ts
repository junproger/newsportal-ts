import App from './components/app/app';
import { ITypeApp } from './components/app/types/ITypeApp';

import './global.css';
import './assets/favicon.ico';

const app: ITypeApp = new App();
app.start();
