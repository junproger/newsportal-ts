import { articleItem } from '../../../types/articleItem';

export interface typeNews {
    draw(data: articleItem[]): void;
}
