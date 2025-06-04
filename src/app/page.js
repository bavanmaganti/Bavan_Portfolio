import './portfolio.css';

export default function Home() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h2>Bavan Maganti</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#Experience">Experience</a></li>
            {/* <li><a href="#about">About</a></li> */}
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I&apos;m <span className="highlight">Bavan Maganti</span></h1>
          <h2>Aspiring Software Engineer</h2>
          <p>Master&apos;s in Computer Scinece at Texas A&amp;M Universtiy</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      {/* About Section
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer specializing in Next.js, React, 
            and modern web technologies. I love creating fast, SEO-friendly websites 
            that provide excellent user experiences.
          </p>
        </div>
      </section> */}

       {/* Experience */}
       <section id='Experience' className='projects'>
        <div className='container'>
          <h2>Experience</h2>
          <div className='projects-grid'>
            <div className='project-card'>
              <h3>Graduate Teaching Assistant - Texas A&amp;M Universtiy</h3>
              
              <p>Developed an application for TAMUK Hospital to manage Electronic Medical Records (EMRs), leveraging Python, PyPDF for PDF parsing, and 
                 SQL for efficient data storage.</p>
                  <p> Implemented automated document segmentation based on encounter ID, optimizing data retrieval and reducing 
                 manual data entry time by 70%. </p>
            </div>
            <div className='project-card'>
              <h3>Software Engineer Extern - Cytiva</h3>
              <p>Led the development of React.js and CSS-based chatbot for Cytiva&apos;s medical instrument troubleshooting, enhanced user experience and 
                 engagement across both web and mobile platforms.  </p>
              <p>Integrated secure APIs for real-time response analysis and maintenance recommendations, ensured data privacy and user safety. </p>
              <p>Optimized the existing codebase, improving performance and scalability, leading to a 25% reduction in response time and enhanced reliability 
                 under high-demand conditions. </p>
              <p>Contributed to cloud-based deployment and scaling, leveraging AWS services, ensuring 99.9% uptime and seamless chatbot operation for 
                 continuous user support. </p>
            </div>
            <div className='project-card'>
            <h3>Software Engineer Intern- Hexaware</h3>
              <p>Developed a Computer Vision pipeline using CNNs (AlexNet, ResNet50, MobileNetv2), achieving 96.21% accuracy in weed classification</p>
              <p>Integrated Spring Boot microservices to streamline AI inference, reducing latency by 20%. </p>
              <p>Deployed AI models on Docker, Kubernetes, enabling auto-scaling and load balancing.</p>
              <p>Optimized edge computing with SoC deployment, improving standalone operations. </p>
              <p>Integrated with AWS (Lambda, S3, API Gateway, Auto Scaling) for real-time monitoring, boosting efficiency by 40%. </p>
            </div>
            
          </div>
        </div>
       </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Programming Languages</h3>
              <p>Python,C,C++,Java,MATLAB</p>
            </div>
            <div className="skill-item">
              <h3>Web Development</h3>
              <p>React JS, Node JS, HTML, CSS</p>
            </div>
            <div className="skill-item">
              <h3>Database</h3>
              <p>MongoDB, NoSQL, Relational Database, Elasticsearch</p>
            </div>
            <div className="skill-item">
              <h3>Tools and Technologies</h3>
              <p>Git, Docker, Kubernetes, Linux, Restful APIs, Jira</p>
            </div>
            <div className="skill-item">
              <h3>Cloud Technologies</h3>
              <p>AWS, Azure, GCP</p>
            </div>
            <div className="skill-item">
              <h3>Other</h3>
              <p>Agile Methodologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Baby Facial Emotion Recognition</h3>
              <p> Built and refined CNN models for real-time baby emotion detection using computer vision with Matlab deep learning toolbox, expanded the dataset 
                  by 40% through data augmentation. The model achieved 86% accuracy with ResNet50 for reliable predictions.  </p>
              <p>
                   Deployed the model on a Raspberry Pi, enabling autonomous operation with 25% faster computation and connected Raspberry Pi to LAN to send 
                   alerts to devices connected to same LAN when negative emotions are detected.  
              </p>
              <div className="project-tech">
                <span>Machine Learining</span>
                <span>Computer Vision</span>
                <span>Artificial Intelligence</span>
              </div>
              {/* <button>View Project</button> */}
            </div>
            <div className="project-card">
              <h3>Bitcoin Mining</h3>
              <p> Developed a full-stack web application using Flask serving a REST API with React as the frontend. Implemented GitHub OAuth to retrieve data 
                  from user&apos;s repositories. </p>
              <p>
                  Visualized GitHub data to show collaboration, added features such as sorting according to programming language, most likes. stored the user data 
                  on MongoDB. Performed CRUD operations to make necessary changes in user data.
              </p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>CSS</span>
              </div>
              {/* <button>View Project</button> */}
            </div>
            <div className="project-card">
              <h3>ChatGPT Mini – AI – Powered Language Translation</h3>
              <p>Developed a full-stack AI translation system using a transformer- based model for English-to-French translation. Integrated Hugging Face&apos;s GPT 
                 model, optimizing Encoder/Decoder layers, improving translation accuracy by 40%. 
              </p>
              <p>
                 Deployed the model on AWS Lambda via a RESTful API,reducing latency by 30% and enhancing scalability. 
                 Implemented CI/CD with Docker &amp; GitHub Actions, ensuring automated testing &amp;deployment.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Generative AI</span>
                <span>API Integration</span>
                <span>AWS</span>
              </div>
              {/* <button></button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I&apos;d love to discuss your next project!</p>
          <div className="contact-info">
            <p>Email: bavan.maganti@gmail.com</p>
            <p>Phone: +1 (361) 455-7034</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/bavan-maganti/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> */}
              <a href="https://leetcode.com/u/bavan123/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy;End of Page</p>
      </footer>
    </div>
  );
}
