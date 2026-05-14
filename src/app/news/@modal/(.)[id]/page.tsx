'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNewsById } from '../../../../lib/api';

export default function Modal({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [news, setNews] = useState<any>(null);

    useEffect(() => {
        params.then(({ id }) => {
            setNews(getNewsById(parseInt(id)));
        });
    }, [params]);

    if (!news) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={() => router.back()}
        >
            <div
                style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    maxWidth: '500px',
                    width: '90%',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{news.title}</h2>
                <p>{news.content.substring(0, 100)}...</p>
                <button onClick={() => router.back()}>Закрыть</button>
            </div>
        </div>
    );
}