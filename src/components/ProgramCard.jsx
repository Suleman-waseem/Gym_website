import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Activity } from 'lucide-react';
import '../styles/Cards.css';

const ProgramCard = ({ title, description, image, duration, difficulty }) => {
  return (
    <div className="program-card">
      <div className="program-img-wrapper">
        <img src={image || '/assets/program-placeholder.jpg'} alt={title} className="program-img" />
      </div>
      <div className="program-content">
        <h3>{title}</h3>
        <p className="program-desc">{description}</p>
        <div className="program-meta">
          <span><Clock size={16} /> {duration}</span>
          <span><Activity size={16} /> {difficulty}</span>
        </div>
        <Link to="/programs" className="program-link">
          Learn More <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
