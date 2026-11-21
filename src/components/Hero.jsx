import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = ({ title, subtitle, bgImage }) => {
  return (
    <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.9)), url(${bgImage || '/assets/hero-bg.jpg'})` }}>
      <div className="container hero-content">
        <h1 className="hero-title">{title || 'Transform Your Body Today'}</h1>
        <p className="hero-subtitle">
          {subtitle || 'Join the ultimate fitness experience. Get stronger, faster, and healthier with our world-class facilities and expert trainers.'}
        </p>
        <div className="hero-btns">
          <Link to="/membership" className="btn btn-primary">Join Now</Link>
          <Link to="/book-trial" className="btn btn-outline">Book Free Trial</Link>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3 className="text-primary">500+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-item">
            <h3 className="text-primary">25+</h3>
            <p>Expert Trainers</p>
          </div>
          <div className="stat-item">
            <h3 className="text-primary">50+</h3>
            <p>Weekly Classes</p>
          </div>
          <div className="stat-item">
            <h3 className="text-primary">10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
