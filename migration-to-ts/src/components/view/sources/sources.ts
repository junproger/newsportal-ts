import { sourcesItems } from './../../../types/sourcesItems';
import { typeSources } from './../types/typeSources';

import './sources.css';

class Sources implements typeSources {
    draw(data: readonly sourcesItems[]): void {
        const fragment: DocumentFragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: sourcesItems): void => {
            const sourceClone: HTMLTemplateElement = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');
        blockSources ? blockSources.append(fragment) : null;
    }
}

export default Sources;
