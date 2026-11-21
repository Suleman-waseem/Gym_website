import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrainerCard from '../components/TrainerCard';
import ProgramCard from '../components/ProgramCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Featured Programs snippet */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Our Services</h4>
            <h2 className="section-title">Featured <span className="text-primary">Programs</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Scientifically engineered workout regimes designed by Olympic and master fitness trainers.
            </p>
          </div>
          <div className="grid grid-3">
            <ProgramCard 
              title="Weight Loss & HIIT" 
              description="High-intensity calorie-torching workouts designed to burn fat and boost cardiovascular health." 
              image="/assets/program-2.jpg"
              duration="60 mins" 
              difficulty="All Levels" 
            />
            <ProgramCard 
              title="Muscle Building" 
              description="Progressive overload strength training focusing on hypertrophy, power, and muscle density." 
              image="/assets/program-1.jpg"
              duration="90 mins" 
              difficulty="Intermediate" 
            />
            <ProgramCard 
              title="CrossFit & Functional" 
              description="Constantly varied high-intensity movements combining gymnastics, weightlifting, and athletics." 
              image="/assets/program-5.jpg"
              duration="45 mins" 
              difficulty="Advanced" 
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/programs" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div className="about-img-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
            <img src="/assets/about-home.jpg" alt="About Fitness Club" style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(0,0,0,0.85)',
              padding: '12px 20px',
              borderRadius: '8px',
              borderLeft: '4px solid var(--color-primary)'
            }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem', display: 'block' }}>15+ Years</span>
              <span style={{ fontSize: '0.85rem', color: '#ccc' }}>Of Transforming Lives</span>
            </div>
          </div>
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 className="section-subtitle">Why Choose Us</h4>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Push Your Limits <br/>Forward</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', marginTop: '1rem' }}>
              We are more than just a gym. We are an elite fitness community dedicated to unlocking your peak potential. With state-of-the-art training spaces, premium recovery zones, and world-class certified coaches, we guarantee transformative results.
            </p>
            <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-primary">✓</span> Premium Olympic & Rogue Equipment</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-primary">✓</span> Certified Strength & Conditioning Coaches</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-primary">✓</span> Individualized Nutrition & Meal Plans</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span className="text-primary">✓</span> Dedicated Yoga & Recovery Studios</li>
            </ul>
            <div>
              <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Learn Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Preview on Home */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Visual Tour</h4>
            <h2 className="section-title">Inside The <span className="text-primary">Club</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Step into our facility designed for energy, focus, and uncompromising athletic excellence.
            </p>
          </div>
          <div className="grid grid-4" style={{ gap: '1.2rem' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src="/assets/gallery-1.jpg" alt="Dumbbells & Weights" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src="/assets/gallery-2.jpg" alt="Cardio Theatre" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src="/assets/gallery-3.jpg" alt="Turf & Functional Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
              <img src="/assets/gallery-5.jpg" alt="Zen Yoga Space" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Explore Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Trainers Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Coaching Staff</h4>
            <h2 className="section-title">Train With <span className="text-primary">Champions</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Every coach is nationally certified with years of competitive and functional training expertise.
            </p>
          </div>
          <div className="grid grid-3">
            <TrainerCard 
              name="Marcus Vance"
              specialization="Head Coach & Olympic Lifting"
              image="/assets/trainer-1.jpg"
            />
            <TrainerCard 
              name="Elena Rostova"
              specialization="Strength & Conditioning"
              image="/assets/trainer-2.jpg"
            />
            <TrainerCard 
              name="David Kim"
              specialization="HIIT & Athletic Performance"
              image="/assets/trainer-3.jpg"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/trainers" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Meet All Trainers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
