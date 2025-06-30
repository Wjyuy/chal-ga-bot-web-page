import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '20px',
      backgroundColor: '#23272A', // Discord dark grey
      color: '#b9bbbe',
      textAlign: 'center',
      marginTop: 'auto', // 페이지 하단에 붙도록
      boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.3)',
      fontSize: '0.9em'
    }}>
      <p>&copy; {new Date().getFullYear()} 챌가봇. All rights reserved.</p>
      <Link href="https://openapi.nexon.com/ko/game/maplestory/" passHref>Data based on Nexon Open API</Link> | 
      <Link href="https://koreanbots.dev/bots" passHref> 한국 디스코드 공식사이트</Link> | 
      <Link href="https://maplescouter.com" passHref> 환산 주스탯</Link> | 
      <Link href="https://maple.gg/" passHref> 메이플지지</Link> | 
      <Link href="https://maplehistory.kr" passHref> 메이플 히스토리</Link> | 
      <Link href="https://chuchu.gg" passHref> 츄츄지지</Link> 
    </footer>
  );
};

export default Footer;