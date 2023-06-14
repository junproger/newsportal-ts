import { ISourceItem } from '../../../types/ISourceItem';
import { ITypeSources } from './../types/ITypeSources';

import './sources.css';

class Sources implements ITypeSources {
    public draw(data: readonly ISourceItem[]): void {
        const fragment: DocumentFragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: ISourceItem): void => {
            const sourceClone: HTMLTemplateElement = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const blockSources: HTMLElement = <HTMLElement>document.querySelector('.sources');

        if (blockSources) {
            blockSources.innerHTML = '';
            blockSources.append(fragment);
        }
    }
}

export default Sources;
