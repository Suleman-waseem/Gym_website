import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import '../styles/Cards.css';

const PricingCard = ({ title, price, features, recommended }) => {
  return (
    <div className={`pricing-card ${recommended ? 'recommended' : ''}`}>
      {recommended && <div className="recommended-badge">Most Popular</div>}
      <h3 className="pricing-title">{title}</h3>
      <div className="pricing-price">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
        <span className="period">/mo</span>
      </div>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index}>
            <Check size={20} className="text-primary feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/membership" className={`btn ${recommended ? 'btn-primary' : 'btn-outline'} full-width`}>
        Choose Plan
      </Link>
    </div>
  );
};

export default PricingCard;
