import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Manifest.json (PWA file) */}
                    <link rel="manifest" href="/manifest.json" />
                    {/* ios support */}
                    <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
                    <meta name="apple-mobile-web-app-status-bar" content="#4e54c8" />
                    {/* theme color */}
                    <meta name="theme-color" content="#4e54c8"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;