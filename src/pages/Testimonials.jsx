import Hero from '../components/Hero';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael Ramirez",
      role: "Lost 24 lbs in 4 Months",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=80",
      rating: 5,
      text: "The best gym experience I've ever had. Marcus Vance helped me restructure my diet and compound lifts. I've gained noticeable muscle definition and my chronic back pain is completely gone."
    },
    {
      name: "Jessica Turner",
      role: "HIIT & Spin Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=80",
      rating: 5,
      text: "The morning group classes have transformed my routine. The coaches bring electrifying energy every day, and the facility is meticulously clean with luxury showers and locker amenities."
    },
    {
      name: "David Wright",
      role: "Powerlifter & Athlete",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80",
      rating: 5,
      text: "Real Olympic lifting platforms, Eleiko calibrated plates, and chalk allowed! Hard to find commercial gyms that cater to serious strength athletes. Absolutely 10/10 setup."
    },
    {
      name: "Samantha Lee",
      role: "Yoga & Core Member",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&q=80",
      rating: 5,
      text: "The yoga and mobility sessions with Elena have elevated my flexibility and reduced work stress completely. The studio has a serene, zen vibe right in the middle of a bustling gym."
    },
    {
      name: "Chris Patterson",
      role: "CrossFit Competitor",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=160&q=80",
      rating: 5,
      text: "Exceptional turf rig, battle ropes, and assault bikes. The community here pushes you to be 1% better every session without any ego or judgment."
    },
    {
      name: "Amanda Klein",
      role: "Member for 3 Years",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&q=80",
      rating: 5,
      text: "From front desk staff who greet you by name to knowledgeable trainers who spot your form, Fitness Club feels like a genuine family. Joining was the best decision for my health."
    }
  ];

  return (
    <>
      <Hero 
        title="Success Stories" 
        subtitle="Real stories from real athletes. Discover how our community breaks limits and achieves greatness." 
        bgImage="/assets/testimonials-hero.jpg" 
      />
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Testimonials</h4>
            <h2 className="section-title">Transformation <span className="text-primary">Journeys</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Over 2,500+ lives transformed. Read what our dedicated members have experienced.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {reviews.map((review, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--color-bg-lightest)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', gap: '2px' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={28} style={{ color: 'rgba(255,255,255,0.1)' }} />
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem', lineHeight: '1.7', fontStyle: 'italic', fontSize: '0.95rem' }}>
                    "{review.text}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--color-bg-lightest)', paddingTop: '1.25rem' }}>
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      border: '2px solid var(--color-primary)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                    }} 
                  />
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '1.05rem', margin: 0, color: '#fff' }}>
                      {review.name}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
