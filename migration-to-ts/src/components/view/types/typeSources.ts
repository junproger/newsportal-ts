import { sourcesItems } from './../../../types/sourcesItems';

export interface typeSources {
    draw(data: readonly sourcesItems[]): void;
}
