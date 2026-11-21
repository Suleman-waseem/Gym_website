import { useState } from 'react';
import Hero from '../components/Hero';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: '/assets/gallery-1.jpg',
    title: 'Free Weights & Dumbbells',
    category: 'Weights & Strength',
    description: 'Extensive range of dumbbells up to 120lbs and adjustable ergonomic benches.'
  },
  {
    src: '/assets/gallery-2.jpg',
    title: 'High-Tech Cardio Zone',
    category: 'Cardio & HIIT',
    description: 'Equipped with smart Matrix treadmills, stairmasters, and cross-trainers.'
  },
  {
    src: '/assets/gallery-3.jpg',
    title: 'CrossFit & Battle Ropes',
    category: 'Combat & Functional',
    description: 'High-intensity conditioning turf with battle ropes, sleds, and plyo boxes.'
  },
  {
    src: '/assets/gallery-4.jpg',
    title: 'Olympic Lifting Platform',
    category: 'Weights & Strength',
    description: 'Dedicated shock-absorbing platforms with competition bumper plates and Eleiko bars.'
  },
  {
    src: '/assets/gallery-5.jpg',
    title: 'Zen Yoga & Pilates Studio',
    category: 'Studio & Yoga',
    description: 'Peaceful, hardwood-floored studio with natural light for yoga and mobility flow.'
  },
  {
    src: '/assets/gallery-6.jpg',
    title: 'Boxing & Heavy Bags Zone',
    category: 'Combat & Functional',
    description: 'Leather heavy bags, speedbags, and dedicated striking turf for MMA and boxing workouts.'
  },
  {
    src: '/assets/gallery-7.jpg',
    title: 'Iron Grip Plates & Racks',
    category: 'Weights & Strength',
    description: 'High-grade urethane plates, precision calibrated for powerlifters and athletes.'
  },
  {
    src: '/assets/gallery-8.jpg',
    title: 'Mobility & Stretching Studio',
    category: 'Studio & Yoga',
    description: 'Recovery space with foam rollers, resistance bands, and stretching mats.'
  },
  {
    src: '/assets/gallery-9.jpg',
    title: 'Main Fitness Floor',
    category: 'Weights & Strength',
    description: 'Over 15,000 sq ft of open-plan athletic gym space with climate-controlled airflow.'
  },
  {
    src: '/assets/gallery-10.jpg',
    title: 'Functional Rig & Calisthenics',
    category: 'Combat & Functional',
    description: 'Multi-station monkey bars, gymnastic rings, and pull-up rigging.'
  },
  {
    src: '/assets/gallery-11.jpg',
    title: 'Competition Kettlebell Station',
    category: 'Combat & Functional',
    description: 'Full spread of Russian competition kettlebells for explosive full-body power.'
  },
  {
    src: '/assets/gallery-12.jpg',
    title: 'Powerlifting Squat Cages',
    category: 'Weights & Strength',
    description: 'Heavy-duty steel cages with spotter arms and safety bands for maximal lifts.'
  }
];

const categories = ['All', 'Weights & Strength', 'Cardio & HIIT', 'Studio & Yoga', 'Combat & Functional'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIdx, setSelectedIdx] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % filteredItems.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      <Hero 
        title="Our Gallery" 
        subtitle="Take a look inside our world-class facilities, elite equipment, and vibrant community." 
        bgImage="/assets/gallery-hero.jpg" 
      />
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Portfolio</h4>
            <h2 className="section-title">Gym <span className="text-primary">Showcase</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Explore our state-of-the-art training spaces, engineered to inspire your peak performance every single day.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-bg-lightest)',
                  backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-bg-light)',
                  color: activeCategory === cat ? '#000' : 'var(--color-text)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Photos Grid */}
          <div className="grid grid-3" style={{ gap: '1.5rem' }}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.title} 
                style={{ 
                  height: '320px', 
                  overflow: 'hidden', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  position: 'relative',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-bg-lightest)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
                onClick={() => openLightbox(index)}
                className="gallery-card"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Overlay Card Info */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                  padding: '1.5rem 1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  pointerEvents: 'none'
                }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-primary)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    fontWeight: 700 
                  }}>
                    {item.category}
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.15rem', margin: 0, color: '#fff', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ZoomIn size={16} color="var(--color-primary)" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox} 
            style={{ 
              position: 'absolute', 
              top: '24px', 
              right: '32px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10001,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          >
            <X size={26} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevPhoto}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              zIndex: 10001
            }}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image & Caption Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img 
              src={filteredItems[selectedIdx].src} 
              alt={filteredItems[selectedIdx].title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '68vh', 
                objectFit: 'contain', 
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
              }} 
            />
            <div style={{
              marginTop: '1rem',
              textAlign: 'center',
              color: '#fff'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>
                {filteredItems[selectedIdx].title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
                {filteredItems[selectedIdx].description}
              </p>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', display: 'inline-block' }}>
                Photo {selectedIdx + 1} of {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextPhoto}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              zIndex: 10001
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
