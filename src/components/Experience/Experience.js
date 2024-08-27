
import './Experience.scss';


export default function Experience() {
    const experienceList = {
        study: [
            {
                date: '2020.09 ~ 2021.02',
                companyName: '',
                title: '[2020과정평가형]정보처리산업기사(파이썬, C언어, 자바, Java, 앱프로그래밍)',
                project: [
                    {
                        name: '그룹웨어 프로젝트',
                        contents: 'java, jsp를 이용하여 웹으로 구현한 팀프로젝트 입니다. 다른 팀들과는 차별점을 두며 여러가지 기능을 구현해보고 싶던 저는 회사를 다녔던 경험을 바탕으로 그룹웨어라는 주제를 선정하였습니다.',
                    }
                ],
                result: '정보처리산업기사 자격증 취득'
            }
        ],
        work: [
            {
                date: '2022.04 ~ 2022.08',
                companyName: '주식회사 와이엠씨',
                project: [
                    {
                        name: "전동 킥보드 서비스 앱 개발 진행",
                        contents: '정부 과제로 전동 킥보드 서비스 앱 개발에 중간 투입되어, navigation bar, main 에 사용되는 기본 기능 등 개발에 참여하였습니다.',
                    }
                ],
                result: '중간에 내부 사정으로 본 소속으로 돌아가 마무리는 함께하지 못했지만, react-native를 사용하는 경험을 할 수 있었고, 어떤 식으로 프로젝트가 진행되는지 알 수 있었습니다.'
            },
            {
                date: '2022.08 ~ 2024.06',
                companyName: '주식회사 크레페스튜디오',
                project: [
                    {
                        name: '외주 웹 개발',
                        contents: 'angular를 이용한 첫 프로젝트였습니다. ',
                    },
                    {
                        name: '굿 노트에서 사용하는 속지, 스티커를 판매, 구입할 수 있는 서비스( 자사 웹 )',
                        contents: '',
                        url: ''
                    },
                    {
                        name: '여러가지의 메모, 기록할 수 있는 다이어리 웹/앱(Blank)',
                        contents: '',
                        url: ''
                    },
                    {
                        name: 'Blank를 축소시켜 간소화한 다이어리 앱(그림일기장)',
                        contents: '',
                        url: ''
                    },
                    {
                        name: '그림으로 월 달력을 기록하는 다이어리 앱(그림달력)',
                        contents: '',
                        url: ''
                    },
                ],
            }
        ]
    };

    return (


        <div className='experience-box'>
            {/* 객체로 선언한 데잍이터를 Object.keys를 사용해 배열로 변환*/}
            {Object.keys(experienceList).map((key) => (
                <div key={key} className='experience-type-container'>
                    {experienceList[key].map((type, index) => (
                        <div key={index} className='exp-wrap'>
                            {key === 'study' && <img className='exp-icon' src='/images/education.svg' alt="공부" />}
                            {key === 'work' && <img className='exp-icon' src='/images/company.svg' alt="회사" />}
                            <div className='exp-desc'>
                                <p className='exp-date'>{type.date}</p>
                                <p className='exp-m-bold'>{type.companyName}</p>
                                <p className='exp-m-bold'>{type.title}</p>
                                <ul>
                                    {type.project.map((item, idx) => (
                                        <li key={idx}>
                                            <p className='exp-sm-bold'>{item.name}</p>
                                            <p>{item.contents}</p>
                                        </li>
                                    ))}
                                </ul>
                                {type.result && <p>📍 {type.result}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
