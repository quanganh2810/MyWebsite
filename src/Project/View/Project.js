import projectImage from './images/ProjectGroup.jpg';
import './Project.css';
function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <h3>Here, I will tell you about the project I am most proud of - a laser tag game system where I was in charge of developing a machine learning model to recognize player movements!</h3>
      <p>The system was a laser-tag game where you could deal damage by firing a gun or perform certain movements.</p>
      <p>My job in the team was to train a machine learning model that could detect the valid movements using a constant stream of input from two IMU sensors worn on the players' ankle and wrist.</p>
      <p>The hardest part about this process was deciding on how to handle the segmentation and processing of data.</p>
      <p>Overall, the project was a lot of fun and I spent many days at school from morning till midnight to fine-tune it.</p>
      <p>In the end, the model live accuracy is about 90% which is something I am really proud of.</p>
      <p>Here is a picture of my group and a video of us testing our final system with our TA!</p>
      <div className='project-image'>
        <img src={projectImage} alt='ProjectImage' />
      </div>
      <div>
        <h2>Project Video</h2>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/zchNVkcJNxc?si=Ndre0Ix_D_EeMds4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Projects;