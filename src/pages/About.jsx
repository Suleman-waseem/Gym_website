import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <>
      <Hero 
        title="About Us" 
        subtitle="Learn about our mission, vision, and the passionate team that makes Fitness Club the premier fitness sanctuary." 
        bgImage="/assets/about-hero.jpg" 
      />
      
      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Our Story</h4>
            <h2 className="section-title">Welcome to <span className="text-primary">Fitness Club</span></h2>
          </div>
          
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: '#fff' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Our mission is to empower individuals to achieve their absolute peak potential through intelligent training, supportive coaching, and a vibrant community. We believe a strong body breeds an unbreakable mindset and an extraordinary quality of life.
              </p>
              
              <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: '#fff' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                To set the gold standard in athletic conditioning and inclusive wellness. Whether you are an Olympic athlete or stepping into a gym for the first time, our doors are open to guide your transformation.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>24/7 Premium Access</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Certified Physiotherapists</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Clean Towel & Sauna Service</span>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '440px', boxShadow: '0 12px 35px rgba(0,0,0,0.5)', position: 'relative' }}>
              <img src="/assets/about-story.jpg" alt="Our Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.8)',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                Est. 2011
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with Full Imagery */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">World-Class Facilities</h4>
            <h2 className="section-title">Engineered For <span className="text-primary">Performance</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Every square foot is thoughtfully laid out to minimize waiting times and maximize training efficiency.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {/* Facility Card 1 */}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid var(--color-bg-lightest)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="/assets/gallery-2.jpg" alt="Cardio Theatre" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Endurance</span>
                <h3 style={{ margin: '0.5rem 0', color: '#fff', fontSize: '1.4rem' }}>Cardio Theatre</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Over 50 premium Matrix and Concept2 machines with personalized streaming consoles, heart-rate monitors, and panoramic views.
                </p>
              </div>
            </div>

            {/* Facility Card 2 */}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid var(--color-bg-lightest)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="/assets/gallery-1.jpg" alt="Olympic Free Weights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Strength</span>
                <h3 style={{ margin: '0.5rem 0', color: '#fff', fontSize: '1.4rem' }}>Heavy Iron & Free Weights</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Calibrated competition bumper plates, 6 power racks, custom dumbbell racks from 5lbs to 120lbs, and deadlift platforms.
                </p>
              </div>
            </div>

            {/* Facility Card 3 */}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid var(--color-bg-lightest)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src="/assets/gallery-3.jpg" alt="Functional & CrossFit Turf" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Athletics</span>
                <h3 style={{ margin: '0.5rem 0', color: '#fff', fontSize: '1.4rem' }}>Functional & Turf Rig</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  40-yard sprint turf, battle ropes, sleds, plyometric boxes, gymnastics rings, and kettlebells for athletic conditioning.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/gallery" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View Facility Photos in Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
