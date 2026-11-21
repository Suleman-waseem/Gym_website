import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container grid grid-4">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <Dumbbell className="logo-icon" />
            <span>Fitness<span className="text-primary">Club</span></span>
          </Link>
          <p className="footer-desc">
            Transform your body today. We provide top-notch facilities, certified trainers, and dynamic classes to help you achieve your fitness goals.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><Instagram /></a>
            <a href="#" className="social-icon"><Facebook /></a>
            <a href="#" className="social-icon"><Twitter /></a>
            <a href="#" className="social-icon"><Youtube /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Working Hours</h3>
          <ul className="footer-hours">
            <li>Monday - Friday: <span>5:00 AM - 11:00 PM</span></li>
            <li>Saturday: <span>6:00 AM - 10:00 PM</span></li>
            <li>Sunday: <span>7:00 AM - 8:00 PM</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li><MapPin size={20} className="contact-icon"/> 123 Fitness Street, NY 10001</li>
            <li><Phone size={20} className="contact-icon"/> +1 (555) 123-4567</li>
            <li><Mail size={20} className="contact-icon"/> info@fitnessclub.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fitness Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
