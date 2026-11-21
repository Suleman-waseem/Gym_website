import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss & Shred",
      description: "High-intensity metabolic conditioning designed to incinerate fat and elevate your resting metabolic rate.",
      duration: "60 mins",
      difficulty: "All Levels",
      image: "/assets/program-2.jpg"
    },
    {
      title: "Hypertrophy & Strength",
      description: "Progressive barbell resistance training emphasizing compound lifts, structural density, and lean muscular growth.",
      duration: "90 mins",
      difficulty: "Intermediate",
      image: "/assets/program-1.jpg"
    },
    {
      title: "CrossFit & Athletic Rig",
      description: "Gymnastics, Olympic weightlifting, and interval sprints executed at maximum power to build complete athleticism.",
      duration: "50 mins",
      difficulty: "Advanced",
      image: "/assets/program-5.jpg"
    },
    {
      title: "Yoga, Mobility & Flow",
      description: "Restore joint mobility, strengthen core stabilizers, and decompress the nervous system with expert instructors.",
      duration: "60 mins",
      difficulty: "Beginner",
      image: "/assets/program-3.jpg"
    },
    {
      title: "Boxing & Combat Strike",
      description: "Heavy bag drill combos, shadowboxing, and footwork conditioning for elite endurance, coordination, and agility.",
      duration: "45 mins",
      difficulty: "All Levels",
      image: "/assets/program-6.jpg"
    },
    {
      title: "1-on-1 Personal Coaching",
      description: "Dedicated biomechanical analysis, periodized program design, and nutritional guidance customized for your goals.",
      duration: "60 mins",
      difficulty: "Customized",
      image: "/assets/program-4.jpg"
    }
  ];

  return (
    <>
      <Hero 
        title="Workout Programs" 
        subtitle="Choose from a diverse roster of world-class classes and programs engineered to push past your plateau." 
        bgImage="/assets/programs-hero.jpg" 
      />
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Find Your Fit</h4>
            <h2 className="section-title">Explore Our <span className="text-primary">Programs</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Every program is backed by sports science, certified coaching, and real performance tracking.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {programs.map((prog, index) => (
              <ProgramCard key={index} {...prog} />
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, rgba(30,30,30,0.9), rgba(15,15,15,0.95))',
            border: '1px solid var(--color-bg-lightest)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Not Sure Which Program Fits You Best?</h3>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '550px', margin: '0 auto 2rem' }}>
              Book a complimentary 1-day pass. Our head trainers will evaluate your movement and recommend the optimal plan.
            </p>
            <Link to="/book-trial" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Claim Free Trial Pass <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
