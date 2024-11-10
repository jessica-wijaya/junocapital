import React from 'react';
import './Philosophy.css';
import philosophy_1 from '../../assets/transparent.png';
import philosophy_2 from '../../assets/program-2.png';
import philosophy_3 from '../../assets/program-3.png';
import philosophy_icon_1 from '../../assets/program-icon-1.png';
import philosophy_icon_2 from '../../assets/program-icon-2.png';
import philosophy_icon_3 from '../../assets/program-icon-3.png';

const Philosophy = () => {
  return (
    <div className='philosophy'>
      <div className='header'>
        <h1>Our Philosophy</h1>
        <p>We approach each investment with conviction, viewing it as a unique opportunity driven by a commitment to transparency, integrity, and innovation. Our strategies are rooted in rigorous analysis, adaptive market insights, and a focus on long-term value creation.</p>
      </div>
      <div className='philosophy-cards'>
        <div className='philosophy-card'>
          <img src={philosophy_icon_1} alt="Transparency Icon" className='philosophy-icon' />
          <h2>Transparency</h2>
          <img src={philosophy_1} alt="Transparency" className='philosophy-image' />
          <p>We believe in clear and open communication with our clients to foster trust and understanding.</p>
        </div>
        <div className='philosophy-card'>
          <img src={philosophy_icon_2} alt="Integrity Icon" className='philosophy-icon' />
          <h2>Integrity</h2>
          <img src={philosophy_2} alt="Integrity" className='philosophy-image' />
          <p>We adhere to the highest ethical standards in all our investment decisions.</p>
        </div>
        <div className='philosophy-card'>
          <img src={philosophy_icon_3} alt="Innovation Icon" className='philosophy-icon' />
          <h2>Innovation</h2>
          <img src={philosophy_3} alt="Innovation" className='philosophy-image' />
          <p>We continuously adapt and innovate to stay ahead of market trends and opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
