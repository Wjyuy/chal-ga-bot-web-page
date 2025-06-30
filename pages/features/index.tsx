// pages/index.js
import React, { useEffect } from 'react';
import Head from 'next/head'; // Next.js의 Head 컴포넌트 임포트

export default function Home() {
  const discordInviteUrl = "https://discord.com/oauth2/authorize?client_id=1354793432601591848&permissions=8&integration_type=0&scope=bot+applications.commands";

  // useEffect(() => {
  //   // 2초 후 리다이렉트 (사용자에게 안내 메시지를 보여줄 시간)
  //   const timer = setTimeout(() => {
  //     window.location.href = discordInviteUrl;
  //   }, 2000); 

  //   // 컴포넌트 언마운트 시 타이머 정리
  //   return () => clearTimeout(timer);
  // }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  return (
    <div className="container">
      <Head>
        <title>챌가봇 기능</title>
      </Head>

    </div>
  );
}