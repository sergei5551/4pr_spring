import { getNewsById } from '../../../lib/api';
import { notFound } from 'next/navigation';

export const dynamicParams = true;
export const dynamic = 'force-dynamic';

interface NewsPageProps {
    params: Promise<{ id: string }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
    const { id: idString } = await params;
    const id = parseInt(idString);
    const news = getNewsById(id);

    console.log('Looking for id:', id);
    console.log('Found news:', news);

    if (!news) {
        notFound();
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>{news.title}</h1>
            <p>📅 {news.date}</p>
            <p>👤 {news.author}</p>
            <p>👁️ {news.views} просмотров</p>
            <p>{news.content}</p>
            <a href="/">← Назад</a>
        </div>
    );
}