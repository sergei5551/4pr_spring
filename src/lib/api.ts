import newsData from '../data/news.json';

export interface NewsItem {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    views: number;
}

export function getAllNews(): NewsItem[] {
    return newsData.news;
}
console.log('Загруженные данные:', newsData);

export function getNewsById(id: number): NewsItem | undefined {
    console.log('Поиск новости с id:', id);
    const result = newsData.news.find(n => n.id === id);
    console.log('Результат поиска:', result);
    return newsData.news.find(n => n.id === id);
}

export function getAllNewsIds(): { id: string }[] {
    return newsData.news.map(n => ({ id: n.id.toString() }));
}