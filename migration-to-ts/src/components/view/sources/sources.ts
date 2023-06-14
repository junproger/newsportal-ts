import { sourceItem } from '../../../types/sourceItem';
import { typeSources } from './../types/typeSources';

import './sources.css';

class Sources implements typeSources {
    public draw(data: readonly sourceItem[]): void {
        const fragment: DocumentFragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: sourceItem): void => {
            const sourceClone: HTMLTemplateElement = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');
        blockSources ? (blockSources.innerHTML = '') : null;
        blockSources ? blockSources.append(fragment) : null;
    }
}

export default Sources;
