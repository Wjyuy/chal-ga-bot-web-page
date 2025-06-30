// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <> {/* Fragment 사용 */}
      <Head>
        <title>챌가봇 - Discord 봇</title>
        <meta name="description" content="메이플스토리 유저들을 위한 다기능 디스코드 봇 챌가봇을 만나보세요!" />
      </Head>

      <div className="container" style={{
        textAlign: 'center',
        padding: '50px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#36393f', /* Discord almost black */
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        marginTop: '50px',
        marginBottom: '50px'
      }}>
        <h1 className="title" style={{
          fontSize: '3.5em',
          color: '#7289da', /* Discord brand color */
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          ✨ 챌가봇 ✨
        </h1>
        <p className="description" style={{
          fontSize: '1.3em',
          color: '#b9bbbe',
          marginBottom: '10px'
        }}>
          유저들을 위한 다기능 디스코드 봇입니다.
        </p>
        <p className="description" style={{
          fontSize: '1.3em',
          color: '#b9bbbe',
          marginBottom: '40px'
        }}>
          강화 시뮬레이터, 장부 관리, 공지 알림 등 다양한 기능을 제공합니다.
        </p>

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
              textDecoration: 'none',
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

        <div className="bot-icon" style={{
          fontSize: '5em',
          marginTop: '50px',
          filter: 'drop-shadow(0 0 10px rgba(114, 137, 218, 0.7))'
        }}>
          
        </div>
      </div>
    </>
  );
}