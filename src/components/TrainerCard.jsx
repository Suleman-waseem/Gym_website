import { Instagram, Twitter, Facebook } from 'lucide-react';
import '../styles/Cards.css';

const TrainerCard = ({ name, specialization, image }) => {
  return (
    <div className="trainer-card">
      <div className="trainer-img-wrapper">
        <img src={image || '/assets/trainer-placeholder.jpg'} alt={name} className="trainer-img" />
        <div className="trainer-socials">
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Facebook size={20} /></a>
        </div>
      </div>
      <div className="trainer-info">
        <h3>{name}</h3>
        <p className="text-primary">{specialization}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
