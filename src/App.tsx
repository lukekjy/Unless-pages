import { useState } from 'react';
import Ballpit from './Ballpit';

const prophecies = [
  '지금 누른 버튼은 아무 일도 하지 않았습니다.',
  '축하합니다. 공들이 여전히 공입니다.',
  '방금 생산성 0.3초를 잃었습니다.',
  '의미를 찾으려는 시도가 감지되었습니다. 실패.',
  '이 문장은 당신에게 실질적인 도움을 주지 않습니다.',
  '놀랍게도 페이지는 여전히 쓸모없습니다.'
];

const uselessFacts = [
  { label: '오늘의 성과', value: '0건', note: '끝내주는 무의미' },
  { label: '절약된 시간', value: '0초', note: '오히려 사용 중' },
  { label: '해결된 문제', value: '없음', note: '일관된 품질' }
];

const App = () => {
  const [message, setMessage] = useState(prophecies[0]);
  const [clicks, setClicks] = useState(0);
  const [ceremonyCount, setCeremonyCount] = useState(1);

  const summonNothing = () => {
    setClicks(current => current + 1);
    setMessage(prophecies[(clicks + 1) % prophecies.length]);
  };

  const increaseCeremony = () => {
    setCeremonyCount(current => current + 1);
    setMessage('쓸데없는 절차가 한 단계 더 추가되었습니다.');
  };

  return (
    <main className="app-shell">
      <section className="ballpit-frame">
        <Ballpit
          className="ballpit-canvas"
          count={70}
          minSize={0.95}
          maxSize={1.75}
          size0={1.05}
          colors={[0xff6b6b, 0xfeca57, 0x48dbfb, 0x1dd1a1]}
          ambientIntensity={0.8}
          lightIntensity={250}
          gravity={0.04}
          followCursor
        />

        <div className="noise" />

        <div className="overlay">
          <p className="eyebrow">Certified Pointless Experience</p>
          <h1>아무짝에도 쓸모없는 페이지</h1>
          <p className="lead">
            이곳은 시간을 조용히 증발시키기 위해 설계된 디지털 공간입니다. 버튼을 눌러도 해결되는 일은 없고,
            공들은 여전히 즐겁게 서로 부딪힐 뿐입니다.
          </p>

          <div className="button-row">
            <button className="useless-button" type="button" onClick={summonNothing}>
              아무 일도 일어나지 않기
            </button>
            <button className="secondary-button" type="button" onClick={increaseCeremony}>
              절차만 늘리기
            </button>
          </div>

          <div className="message-card">
            <span className="message-label">방금 확인된 사실</span>
            <strong>{message}</strong>
          </div>

          <div className="stats-grid">
            {uselessFacts.map(item => (
              <article className="stat-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
              </article>
            ))}
            <article className="stat-card">
              <span>헛수고 횟수</span>
              <strong>{clicks}회</strong>
              <small>놀랍도록 누적됨</small>
            </article>
            <article className="stat-card">
              <span>불필요한 의전</span>
              <strong>{ceremonyCount}단계</strong>
              <small>계속 늘릴 수 있음</small>
            </article>
          </div>

          <div className="footer-note">
            <p>이 페이지는 아무 목표도 달성하지 않지만, 그 점에 있어서는 매우 성실합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
