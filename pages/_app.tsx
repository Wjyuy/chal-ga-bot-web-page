import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head'; // 올바름: 'next/head'에서 임포트

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        {/* 올바름: 모든 페이지에 대한 공통 메타 태그/링크에 사용 */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;