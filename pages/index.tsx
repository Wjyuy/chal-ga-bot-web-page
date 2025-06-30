// pages/index.js (새로운 메인 페이지, 루트 / 경로를 담당합니다)
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Next.js의 Link 컴포넌트 임포트

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>챌가봇 - Discord 봇</title>
        <meta name="description" content="메이플스토리 유저들을 위한 다기능 디스코드 봇 챌가봇을 만나보세요!" />
      </Head>

      <h1 className="title">✨ 챌가봇 ✨</h1>
      <p className="description">유저들을 위한 다기능 디스코드 봇입니다.</p>
      <p className="description">강화 시뮬레이터, 장부 관리, 공지 알림 등 다양한 기능을 제공합니다.</p>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="/invite" passHref>
          <button style={{
            padding: '15px 30px',
            fontSize: '1.4em',
            fontWeight: 'bold',
            color: '#ffffff',
            backgroundColor: '#7289da', /* Discord brand color */
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textDecoration: 'none', /* Link 컴포넌트 사용 시 기본 스타일 제거 */
            display: 'inline-block'
          }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5f73c6'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7289da'}>
            지금 챌가봇 초대하기!
          </button>
        </Link>
        <Link href="/features" passHref>
          <button style={{
            padding: '10px 25px',
            fontSize: '1.1em',
            color: '#b9bbbe',
            backgroundColor: '#424549', /* Discord dark background */
            border: '2px solid #555',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#36393f'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#424549'}>
            기능 자세히 보기
          </button>
        </Link>
      </div>

      <div className="bot-icon">🤖</div>
    </div>
  );
}
