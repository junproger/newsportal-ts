import { sourcesItems } from './../../../types/sourcesItems';
import './sources.css';

class Sources {
    draw(data: sourcesItems[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: sourcesItems) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const blockSources = <Element>document.querySelector('.sources');
        blockSources ? blockSources.append(fragment) : null;
    }
}

export default Sources;
