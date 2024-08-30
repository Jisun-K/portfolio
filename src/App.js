
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import useFullScroll from './hooks/useFullScroll';
import BottomDesc from './components/BottomDesc/BottomDesc';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';

function useHighlightRestart(currentSection) {
  const highlightRef = useRef(null);

  useEffect(() => {
    const highlightElement = highlightRef.current;
    if (currentSection === 0) {
      highlightElement.classList.add('start-animation');
    } else if (currentSection !== 0) {
      highlightElement.classList.remove('start-animation');
    }
  }, [currentSection]);

  return highlightRef;
}


export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const currentSection = useFullScroll();
  const highlightRef = useHighlightRestart(currentSection);

  const isShowBottom = currentSection === 1 || currentSection === 2;

  const clickProject = (item) => {
    if (item.id === null || item.id === '') {
      return;
    }
    setSelectedProject(item.id);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이전 상태를 확인하거나 초기 상태를 설정할 수 있습니다.
    // 그러나, 일반적으로 상태는 리로드 시 초기화됩니다.
  }, []);

  useEffect(() => {
    setSelectedProject('');
    if (selectedProject) {
      alert(selectedProject);
    }
  }, [selectedProject]);

  return (
    <div className='App'>
      {/* page1 */}
      <section className='section main'>
        <p className='task'><span>- 프론트 엔드 개발자 -</span><br />김지선</p>
        <p className='introduction'>안녕하세요. 끊임없이 배우며 성장하는 개발자가 되고 싶은 김지선입니다.
          <span ref={highlightRef} className='highlight'></span>
        </p>
      </section>
      {/* page2 */}
      <section className='section about'>
        <p className='section-name'>ABOUT</p>
        <About />
      </section>
      {/* page3 */}
      <section className='section exp'>
        <Experience clikedProject={clickProject} />
      </section>

      <section className='section project'>
        <Project id={selectedProject} />
      </section>

      <BottomDesc isShow={isShowBottom} />
      {/* {isShowBottom && <BottomDesc />} */}
    </div>
  )
}