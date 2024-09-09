import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      let currentSection = 'about'; // Default to 'about' section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Subtract some pixels to trigger earlier
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="background">
        {/* Animated background spans */}
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="sidebar">
          <h1 className="title">Emma Hoffmann</h1>
          <h2 className="subtitle">Computer Science Student | Business Owner & Digital Artist</h2>
          <p className="tagline">Actively pursuing opportunities in Software Development, Data Science, and Design.</p>
          <nav className="navigation">
            <ul>
              <li
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleClick('about')}
              >
                ABOUT
              </li>
              <li
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => handleClick('experience')}
              >
                EXPERIENCE
              </li>
              <li
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => handleClick('projects')}
              >
                PROJECTS
              </li>
            </ul>
          </nav>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/emmarhoffmann/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/emmarhoffmann" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:erhoffmann128@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="content">
          <section id="about">
            <h3>ABOUT</h3>
            <div className="custom-heading2">
              Hi, I'm Emma—a dedicated Computer Science student at St. Cloud State University, where I merge my love for technology and creativity to craft innovative solutions. Alongside my studies, I run Lakeline Design, a business where I create hand-drawn digital artwork and manage every aspect of the operation—from artistic design to optimizing e-commerce platforms and automating workflows.
            </div>
            <a href="/assets/Emma Hoffmann Resume.pdf" target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="custom-heading">View Full Resume</div>
            </a>
          </section>


          <section id="experience">
            <h3>EXPERIENCE</h3>
            <h4>Lakeline Design</h4>
            <h5>Owner, Digital Artist, Designer, Technical Lead</h5>

            {/* Experience Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Lakeline-Design-Automation-System" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Automation System</h6>
                </a>
                <p>
                Co-developed a custom Shopify app with Python, utilizing API integration to automate product management, and implemented an extensive system for automated product image creation, achieving up to 98% time savings, 100% conversion rate increase, and significantly enhancing overall customer experience.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Python</span>
                  <span className="skill-bubble">Shopify API</span>
                  <span className="skill-bubble">Automation</span>
                </div>
              </div>
            </div>

              {/* Experience Item */}
              <div className="hover-box">
                <div className="experience-content">
                {/*<a href="........................." target="_blank" rel="noopener noreferrer" className="project-link">*/}
                <a>
                  <h6>Enhanced E-commerce Platform Features</h6>
                </a>
                <p>
                Developed customized e-commerce features that combined technical improvements with design enhancements to elevate user experience. Optimized the Shopify theme, boosting conversion rates by 25% and reducing the bounce rate by 40%. These improvements created a seamless, intuitive shopping experience that increased engagement and sales.              </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Javascript</span>
                  <span className="skill-bubble">HTML</span>
                  <span className="skill-bubble">CSS</span>
                  <span className="skill-bubble">Liquid</span>
                  <span className="skill-bubble">UX/UI design</span>
                  <span className="skill-bubble">Frontend development</span>
                </div>
              </div>
            </div>

            {/* Experience Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://lakelinedesign.com/blogs/blog" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Custom Webpages</h6>
                </a>
                <p>
                Built and designed custom webpages for specific needs such as installation guides, FAQs, and product care instructions. These resources helped customers better understand the product, reduced support queries, and improved post-purchase satisfaction. Each page was tailored to enhance the user journey and support transparency in product care and installation.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Javascript</span>
                  <span className="skill-bubble">CSS</span>
                  <span className="skill-bubble">UX/UI design</span>
                </div>
              </div>
            </div>
            
            {/* Experience Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://lakelinedesign.com/collections/all-lakes" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Digital Illustration Collection</h6>
                </a>
                <p>
                Created a collection of over 200 digitally hand-drawn lake illustrations, blending artistic creativity with geographical accuracy to offer personalized, location-specific wall art that captures the beauty of nature and provides a detailed representation of individual lakes.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Procreate</span>
                  <span className="skill-bubble">Graphic Design</span>
                </div>
              </div>
            </div>

            {/* Experience Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://www.etsy.com/shop/LakelineDesign/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Sales Excellence</h6>
                </a>
                <p>
                Maintained a high standard of customer service with over 400 positive reviews and nearly 3,000 sales. Focused on prompt, reliable shipping and personalized customer interactions, solidifying reputation. High-quality product presentation, consistent 5-star ratings, and a seamless buying experience have driven the success of Lakeline Design on multiple platforms.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Customer Service</span>
                  <span className="skill-bubble">Etsy</span>
                  <span className="skill-bubble">Sales</span>
                </div>
              </div>
            </div>
          </section>

          <section id="projects">
            <h3>PROJECTS</h3>
            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Movie-Selection-Application" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Movie Selection Application</h6>
                </a>
                <p>
                Qt-based application provides a modern movie selection experience through a responsive QML interface, combined with a C++ backend. Users can explore movies using the app's randomization feature or load custom movie lists via text files, ensuring an interactive and flexible user experience.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Qt</span>
                  <span className="skill-bubble">QML</span>
                  <span className="skill-bubble">C++</span>
                  <span className="skill-bubble">UX/UI</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Comparative-Analysis-of-Sorting-Algorithm-Efficiency" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Comparative Analysis of Sorting Algorithms Efficiency</h6>
                </a>
                <p>
                Conducted a comparative analysis of five sorting algorithms—Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort—across C++, Java, and Python. Assessed the algorithms' performance on datasets of varying sizes, providing insights into the optimal selection of algorithms and languages for data-intensive tasks. The project highlighted Quick Sort's consistent efficiency, especially for large datasets, across all three languages.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Algorithm Analysis</span>
                  <span className="skill-bubble">Data Analysis</span>
                  <span className="skill-bubble">Research</span>
                  <span className="skill-bubble">C++</span>
                  <span className="skill-bubble">Java</span>
                  <span className="skill-bubble">Python</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Evolution-Simulator" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Evolution Simulator</h6>
                </a>
                <p>
                Python and Pygame-based simulation where creatures evolve by moving, reproducing, and mutating over time. The simulation models natural selection, with random mutations influencing survival and future generations.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Python</span>
                  <span className="skill-bubble">Pygame</span>
                  <span className="skill-bubble">Game Development</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Library-Management-System" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Library System</h6>
                </a>
                <p>
                Developed a Python-based Library Management System that allows users to manage books and encyclopedias, including adding items and saving collections to a CSV file. Implemented data persistence for ongoing usage and basic error handling to ensure a smooth user experience.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">Python</span>
                  <span className="skill-bubble">OOP</span>
                  <span className="skill-bubble">Data Management</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Analysis-of-Student-Debt-Among-First-Generation-College-Students" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Analysis of Student Debt Among First-Generation College Students</h6>
                </a>
                <p>
                Performed a statistical analysis using R to explore disparities in student debt among first-generation college students. Applied linear regression and descriptive statistics to evaluate the impact of variables such as college locale, median income, and enrollment size, revealing substantial debt variations across different demographics. Focused on trends and policy implications to better understand financial challenges faced by students.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">R</span>
                  <span className="skill-bubble">Data Analysis</span>
                  <span className="skill-bubble">Statistical Methods</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Analysis-of-Sleep-Patterns-and-Psychological-Well-being-Among-College-Students" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Analysis of Sleep Patterns and Psychological Well-being Among College Students</h6>
                </a>
                <p>
                Investigated the relationship between sleep patterns, mental health, and academic performance using R. Leveraged t-tests, correlation matrices, and visualizations to examine stress, anxiety, depression, and GPA. This study provided insights into gender-based stress differences and behavioral patterns, suggesting potential interventions to improve student well-being.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">R</span>
                  <span className="skill-bubble">Data Analysis</span>
                  <span className="skill-bubble">Statistical Methods</span>
                </div>
              </div>
            </div>

            {/* Project Item */}
            <div className="hover-box">
              <div className="experience-content">
                <a href="https://github.com/emmarhoffmann/Analysis-of-California-Real-Estate-Market-Factors-Influencing-Home-Prices" target="_blank" rel="noopener noreferrer" className="project-link">
                  <h6>Analysis of California Real Estate Market</h6>
                </a>
                <p>
                Conducted a comprehensive statistical analysis of California's real estate market using R. Employed linear regression and ANOVA to assess the influence of home size, bedrooms, and bathrooms on property prices, comparing results across multiple states. The analysis identified significant regional price variations, providing insights for real estate investment strategies.
                </p>
                <div className="tech-skills">
                  <span className="skill-bubble">R</span>
                  <span className="skill-bubble">Data Analysis</span>
                  <span className="skill-bubble">Statistical Methods</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;