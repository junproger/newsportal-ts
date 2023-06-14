import { IArticleItem } from '../../../types/IArticleItem';

export interface ITypeNews {
    draw(data: IArticleItem[]): void;
}
