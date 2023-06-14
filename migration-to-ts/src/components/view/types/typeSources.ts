import { sourceItem } from '../../../types/sourceItem';

export interface typeSources {
    draw(data: readonly sourceItem[]): void;
}
