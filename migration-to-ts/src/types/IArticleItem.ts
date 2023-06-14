export interface IArticleItem {
    source: {
        id: string | null;
        name: string | null;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}