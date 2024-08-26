
import './About.scss';

export default function About() {
    const list = [
        {
            name: 'kjisun1221@gmail.com',
            click: false
        },
        {
            name: 'GITHUB',
            url: 'https://github.com/Jisun-K',
            click: true
        },
        {
            name: 'RESUME',
            url: 'https://www.notion.so/Jisun-Kim-32d3432a874748b082494e6be8b6047a?pvs=4',
            click: true
        },
    ];

    return (
        <div className="about-box">
            <div className='profile-box'>
                <img className="profile" src="/images/portfolio_img.svg" alt="프로필" />
                <p>
                    김지선 <br />
                    1997.12.21 <br />
                    일신여자상업고등학교 졸업(2013.03 ~ 2016.02)
                </p>
            </div>
            <ul className="info-list">
                {list.map((item, index) => (
                    <li key={index}>
                        {item.url ? (
                            <>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                                <img src="/images/click.svg" alt="click" />
                            </>
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
