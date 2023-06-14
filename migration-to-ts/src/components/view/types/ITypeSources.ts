import { ISourceItem } from '../../../types/ISourceItem';

export interface ITypeSources {
    draw(data: readonly ISourceItem[]): void;
}
