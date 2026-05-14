import Link from 'next/link';
import { getAllNews } from "../lib/api";

export default function HomePage() {
    const news = getAllNews();

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Последние новости</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
                {news.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                        <h3>
                            <Link href={`/news/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p style={{ color: '#666', marginTop: '10px' }}>
                            📅 {item.date} | 👤 {item.author} | 👁️ {item.views} просмотров
                        </p>
                        <p style={{ marginTop: '10px' }}>{item.content.substring(0, 150)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}