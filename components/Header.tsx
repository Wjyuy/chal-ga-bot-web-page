import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#23272A', // Discord dark grey
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    }}>
      <div style={{ fontSize: '1.8em', fontWeight: 'bold' }}>
        <Link href="/" passHref>
          <span style={{ cursor: 'pointer', color: '#ffffff', textDecoration: 'none' }}>챌가봇</span>
        </Link>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '25px' }}>
          <li>
            <Link href="/" passHref>
              <span style={{ cursor: 'pointer', color: '#b9bbbe', textDecoration: 'none', fontSize: '1.1em' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#b9bbbe'}>
                홈
              </span>
            </Link>
          </li>
          <li>
            <Link href="/features" passHref>
              <span style={{ cursor: 'pointer', color: '#b9bbbe', textDecoration: 'none', fontSize: '1.1em' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#b9bbbe'}>
                기능
              </span>
            </Link>
          </li>
          <li>
            <Link href="/invite" passHref>
              <span style={{ cursor: 'pointer', color: '#b9bbbe', textDecoration: 'none', fontSize: '1.1em' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#b9bbbe'}>
                초대하기
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;