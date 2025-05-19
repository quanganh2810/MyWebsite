import travelImage from './images/TravelImage.png';
import './Experience.css'
function Experience() {
  return (
    <section>
      <h2>My Experience</h2>
      <p>My internship was at Wizvision!</p>
      <p>There, I was a full-stack web developer intern but the things that I learnt extend beyond the tech stacks and coding experience.</p>
      <p>I was also involved in the client-facing side aspect of the business including analyzing their requirements,
        conducting User Acceptance Testing on the features that I implemented and did post-production maintenance.</p>
      <p>I also joined the company's meetings which helped me learn a lot on how to talk to clients!</p>
      <p>Really, my experience at Wizvision was awesome and the people I met were all so friendly! The only complaint that I had is how far it was to travel but I made use of the time well by studying while on the MRT!</p>
      <p>This is my travel route to work everyday!</p>
      <div className='travel-image'>
        <img src={travelImage} alt="Nguyen Quang Anh"/>
      </div>
    </section>
  );
}

export default Experience;