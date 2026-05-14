export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body>
        <header style={{ padding: '20px', background: '#2c3e50', color: 'white' }}>
            <h1>📰 Вики Новости</h1>
        </header>
        <main style={{ minHeight: '80vh' }}>{children}</main>
        <footer style={{ padding: '20px', textAlign: 'center', background: '#f1f1f1' }}>
            <p>© 2026 Вики Новости | Все права защищены</p>
        </footer>
        </body>
        </html>
    );
}