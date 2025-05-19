import scholarshipImage from './images/ScholarshipImage.png';
import './Story.css'
function Story() {
  return (
    <section>
      <h2>My Story</h2>
      <p>I was born in Hanoi on October 28th, 2000!</p>
      <p>I grew up in Hanoi and moved to Singapore to attend Sec 3 grade in Singapore at 16! So i have spent one third of my life in Singapore!</p>
      <p>I studied at Bukit Panjang Government High and Saint Andrew's Junior College for my O-Level and A-Level respectively where I performed decently well for both (I think).</p>
      <p>I then landed a scholarship to study Computer Engineering in NUS and I am now graduating from the school and eager to start working!</p>
      <p>Here is a picture of me receiving my scholarship to attend Sec 3 in Singapore, marking the beginning of my journey in a foreign land:</p>
      <div className='scholarship-image'>
        <img src = {scholarshipImage} alt="Scholarship" />
      </div>
    </section>
  );
}

export default Story;