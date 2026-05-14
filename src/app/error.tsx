'use client';

import { useEffect } from 'react';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Ошибка:', error);
    }, [error]);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>⚠️ Что-то пошло не так</h1>
            <p>Произошла ошибка при загрузке страницы.</p>
            <button onClick={reset} style={{ padding: '10px 20px', marginTop: '20px' }}>
                Попробовать снова
            </button>
        </div>
    );
}