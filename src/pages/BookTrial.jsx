import { useState } from 'react';
import Hero from '../components/Hero';
import '../styles/Forms.css';

const BookTrial = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', goal: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setLoading(true);
    
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Booking failed');
      }

      setStatus({ type: 'success', message: data.message || 'Your free trial has been successfully booked! Check your email for confirmation.' });
      setFormData({ name: '', email: '', phone: '', date: '', time: '', goal: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Booking failed. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero 
        title="Book Free Trial" 
        subtitle="Experience our facilities and meet our trainers with a complimentary 1-day pass." 
        bgImage="/assets/trial-hero.jpg" 
      />
      
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="form-wrapper">
            <div className="section-header">
              <h4 className="section-subtitle">Join Us</h4>
              <h2 className="section-title">Reserve Your <span className="text-primary">Spot</span></h2>
            </div>
            
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                {status.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <input type="time" id="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="goal">Primary Fitness Goal</label>
                <select id="goal" name="goal" className="form-control" value={formData.goal} onChange={handleChange} required>
                  <option value="" disabled>Select your goal</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Building">Muscle Building</option>
                  <option value="Endurance & Cardio">Endurance & Cardio</option>
                  <option value="Flexibility & Yoga">Flexibility & Yoga</option>
                  <option value="General Health">General Health</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary full-width" style={{ marginTop: '1rem' }} disabled={loading}>
                {loading ? 'Confirming...' : 'Confirm Booking'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookTrial;
