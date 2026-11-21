import { useState } from 'react';
import Hero from '../components/Hero';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Forms.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({ type: 'success', message: data.message || 'Your message has been sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero 
        title="Contact Us" 
        subtitle="Have questions? We're here to help. Reach out to us today." 
        bgImage="/assets/contact-hero.jpg" 
      />
      
      <section className="section">
        <div className="container grid grid-2">
          
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Get In <span className="text-primary">Touch</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Whether you have questions about our memberships, programs, or facilities, our team is ready to answer all your questions.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--color-bg-lightest)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Location</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>123 Fitness Street, NY 10001</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--color-bg-lightest)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Phone</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'var(--color-bg-lightest)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>info@fitnessclub.com</p>
                </div>
              </div>
            </div>
            
            <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--color-bg-lightest)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--color-text-muted)' }}>[ Google Map Placeholder ]</p>
            </div>
          </div>
          
          <div className="contact-form-container form-wrapper">
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send a Message</h3>
            
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
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
