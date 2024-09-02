
import './Project.scss';

export default function Project({ item }) {

    console.log('project item =============>', item);
    return (
        <div className="project-container">
            {item.id}
        </div>
    );
}
