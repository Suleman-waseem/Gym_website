import Hero from '../components/Hero';
import TrainerCard from '../components/TrainerCard';

const Trainers = () => {
  const trainers = [
    {
      name: "John Davis",
      specialization: "Head Coach & CrossFit",
      image: "/assets/trainer-1.jpg"
    },
    {
      name: "Sarah Jenkins",
      specialization: "Yoga & Mobility",
      image: "/assets/trainer-2.jpg"
    },
    {
      name: "Mike Torres",
      specialization: "Strength & Conditioning",
      image: "/assets/trainer-3.jpg"
    },
    {
      name: "Emma Wilson",
      specialization: "HIIT & Cardio",
      image: "/assets/trainer-4.jpg"
    },
    {
      name: "David Chen",
      specialization: "Nutrition & Weight Loss",
      image: "/assets/trainer-5.jpg"
    },
    {
      name: "Jessica Alba",
      specialization: "Pilates & Core",
      image: "/assets/trainer-6.jpg"
    }
  ];

  return (
    <>
      <Hero 
        title="Expert Trainers" 
        subtitle="Meet our team of certified professionals dedicated to guiding, motivating, and pushing you to your limits." 
        bgImage="/assets/trainers-hero.jpg" 
      />
      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">Team</h4>
            <h2 className="section-title">Meet Our <span className="text-primary">Experts</span></h2>
          </div>
          
          <div className="grid grid-3">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;
