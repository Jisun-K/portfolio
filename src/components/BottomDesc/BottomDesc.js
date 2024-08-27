import { useState, useEffect } from 'react';
import './BottomDesc.scss'; // 스타일 파일을 필요에 따라 수정하거나 추가하세요.
import classNames from 'classnames';

export default function BottomDesc({ isShow }) {
    const [hasScrolled, setHasScrolled] = useState(false); // 스크롤 여부를 추적하는 상태

    useEffect((event) => {
        const handleScroll = () => {
            setHasScrolled(true); // 스크롤 이벤트 발생 시 상태 업데이트
        };

        window.addEventListener('wheel', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const containerClass = classNames('info', {
        'up': isShow && hasScrolled,   // isShow가 true이고, 컴포넌트가 마운트된 이후에 'up' 클래스를 추가
        'down': !isShow && hasScrolled// isShow가 false이고, 컴포넌트가 마운트된 이후에 'down' 클래스를 추가
    });
    return (
        <div className={containerClass}>
            <div className='description'>
                <p> 4년간의 회계 및 경리 업무를 마무리한 후, 교육 과정을 통해 오류를 해결하고 코드 최적화 작업을 하면서 백엔드와 프론트엔드 구분 없이 개발대한 흥미를 느꼈습니다.
                    실무에서 서비스를 출시하며, 이전의 경험을 바탕으로 원활한 소통을 통해 기획, 디자인, 앱 출시 과정까지 참여했습니다.
                    현재까지도 개발에 대한 관심과 열정을 더욱 확장해 나가고 있습니다.</p>
            </div>
            <div className='memoji-box'>
                <img src='/images/memoji_idea.svg' alt='미모티콘' />
            </div>
        </div>
    );
}
