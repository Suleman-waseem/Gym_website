import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "29",
      features: [
        "Full access to gym equipment floor",
        "Free High-speed Wi-Fi & Parking",
        "Locker room & power showers access",
        "1 Group class per week",
        "Free fitness assessment"
      ],
      recommended: false
    },
    {
      title: "Standard Plan",
      price: "59",
      features: [
        "Everything in Basic Plan",
        "Unlimited Group & HIIT Classes",
        "1 Personal Training Session/mo",
        "Access to Infrared Sauna & Steam Room",
        "InBody scan body composition analysis"
      ],
      recommended: true
    },
    {
      title: "VIP Elite Plan",
      price: "99",
      features: [
        "Everything in Standard Plan",
        "Weekly 1-on-1 Personal Training",
        "Customized Macro & Nutrition Blueprint",
        "Priority VIP Booking for Classes",
        "2 Free Monthly Guest Passes",
        "Exclusive towel and smoothie service"
      ],
      recommended: false
    }
  ];

  return (
    <>
      <Hero 
        title="Membership Plans" 
        subtitle="Transparent pricing with zero hidden fees. Choose the membership designed to elevate your lifestyle." 
        bgImage="/assets/membership-hero.jpg" 
      />
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Flexible Pricing</h4>
            <h2 className="section-title">Choose Your <span className="text-primary">Plan</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Cancel anytime. No lock-in contracts or initiation penalties.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ alignItems: 'center', gap: '2rem' }}>
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Amenities & Facility Visual Grid */}
          <div style={{ marginTop: '5rem' }}>
            <div className="section-header">
              <h4 className="section-subtitle">Member Perks</h4>
              <h2 className="section-title">Every Plan Includes <span className="text-primary">Access To</span></h2>
            </div>

            <div className="grid grid-4" style={{ gap: '1.5rem' }}>
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-bg-lightest)'
              }}>
                <div style={{ height: '170px', overflow: 'hidden' }}>
                  <img src="/assets/gallery-1.jpg" alt="Free Weights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Free Weights Zone</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Dumbbells up to 120lbs and 6 power squat cages.</p>
                </div>
              </div>

              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-bg-lightest)'
              }}>
                <div style={{ height: '170px', overflow: 'hidden' }}>
                  <img src="/assets/gallery-2.jpg" alt="Cardio Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Cardio Theatre</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Smart treadmills, rowers, and assault bikes.</p>
                </div>
              </div>

              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-bg-lightest)'
              }}>
                <div style={{ height: '170px', overflow: 'hidden' }}>
                  <img src="/assets/gallery-5.jpg" alt="Yoga Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Yoga & Recovery</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Calm studio space with natural light & mats.</p>
                </div>
              </div>

              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-bg-lightest)'
              }}>
                <div style={{ height: '170px', overflow: 'hidden' }}>
                  <img src="/assets/gallery-7.jpg" alt="Locker & Showers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Luxury Amenities</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Private lockers, sauna, and fresh towel stations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee banner */}
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: '16px',
            background: 'var(--color-bg-light)',
            border: '1px solid var(--color-bg-lightest)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <ShieldCheck size={40} color="var(--color-primary)" />
            <h3 style={{ fontSize: '1.6rem', margin: 0, color: '#fff' }}>14-Day 100% Money-Back Guarantee</h3>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: 0 }}>
              Try Fitness Club risk-free. If you're not completely energized by your experience in the first 14 days, get a full refund immediately.
            </p>
            <Link to="/book-trial" className="btn btn-primary" style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Start With Free 1-Day Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
