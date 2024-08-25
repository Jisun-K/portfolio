
import './About.scss';

export default function About() {
    const list = [
        {
            name: 'kjisun1221@gmail.com',
            click: false
        },
        {
            name: 'github',
            url: 'https://github.com/Jisun-K',
            click: true
        },
        {
            name: 'resume',
            url: 'https://www.notion.so/Jisun-Kim-32d3432a874748b082494e6be8b6047a?pvs=4',
            click: true
        },
    ];

    return (
        <div className="about-box">
            <img className="profile" src="/images/portfolio_img.svg" alt="프로필" />
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
