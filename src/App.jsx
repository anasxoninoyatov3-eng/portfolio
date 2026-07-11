import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`book-page-container ${props.className || ''}`} ref={ref} style={props.style}>
      {props.children}
    </div>
  );
});

Page.displayName = 'Page';

function App() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const flipTo = (pageIdx) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageIdx);
    }
  };

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  // Callback on page change
  const onPageFlip = (e) => {
    setCurrentPage(e.data);
  };

  const [formState, setFormState] = useState({ fullName: '', telegramUser: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const token = "8822680367:AAGXCUfXRQR7Kag1jbgs4LlELac0hJqVheU";
    const chatId = "8283401187";
    const { fullName, telegramUser, message } = formState;

    const fullMessage = `🔔 Yangi portfolio xabari!\n\n👤 Ism: ${fullName}\n✈️ Telegram: ${telegramUser}\n📝 Xabar: ${message}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: fullMessage
      })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.ok) {
          alert("Xabar muvaffaqiyatli yuborildi! ✅");
          setFormState({ fullName: '', telegramUser: '', message: '' });
        } else {
          alert("Xatolik yuz berdi! ❌");
        }
      })
      .catch(error => {
        setLoading(false);
        alert("Tarmoq xatosi! ❌");
      });
  };

  // Projects database (10 pages)
  const projects = [
    {
      idx: '01',
      title: "Mazza Food",
      subtitle: "Food Delivery & Bot Integration",
      desc: "A premium, fully responsive food ordering and delivery web application. Seamlessly integrates with a Python-based Telegram bot and mobile web wrappers for real-time notification alerts, order dispatching, and live menus.",
      tags: ["React", "CSS3", "Python Bot", "Telegram API"],
      image: "/website 3.png",
      liveLink: "https://www.mazza-food.uz",
      codeLink: "https://github.com/anasxoninoyatov3-eng/mazza-food",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      idx: '02',
      title: "Anas Tour",
      subtitle: "Travel Booking Platform",
      desc: "A visually rich and interactive travel and tourism landing platform. Features dynamic packages, interactive itineraries, review sections, and smooth scroll animations for vacation planning.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      image: "",
      liveLink: "https://anastour.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/anas-tour",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
      idx: '03',
      title: "IMA Clock",
      subtitle: "Dynamic Smart Clock",
      desc: "A real-time clock application featuring premium analog and digital UI designs, countdown timers, stopwatch functions, and customizable dark/light theme options with smooth hand transitions.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      image: "",
      liveLink: "https://ima-clock.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/ima-clock",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
    },
    {
      idx: '04',
      title: "English New Kelajak",
      subtitle: "Interactive E-Learning Portal",
      desc: "An educational platform designed for language learners. Features interactive lessons, audio-visual quizzes, tracking modules, and translation guides tailored for Uzbek students learning English.",
      tags: ["React", "CSS3", "Vite", "Netlify"],
      image: "",
      liveLink: "https://english-new-kelajak.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/english-new-kelajak",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    {
      idx: '05',
      title: "AI Clicker Game",
      subtitle: "Incremental Idle Game",
      desc: "A fun, engaging incremental game with a futuristic AI theme. Players click and purchase upgrades (neuromorphic chips, cloud processing clusters) to generate artificial intelligence points.",
      tags: ["React", "Tailwind CSS", "Local Storage"],
      image: "",
      liveLink: "https://ai-clicker.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/ai-clicker",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
    },
    {
      idx: '06',
      title: "Uzbek Fairy Tales",
      subtitle: "Interactive Story Reader",
      desc: "A digital library presenting Uzbek folklore with dynamic illustrations and audio features. Users can browse stories like 'Zumrad va Qimmat' and read them within a beautiful e-book reader interface.",
      tags: ["React", "Tailwind CSS", "JSON Db", "Storytelling"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)"
    },
    {
      idx: '07',
      title: "TaskFlow Dashboard",
      subtitle: "Minimalist Kanban Planner",
      desc: "A Kanban-style task board web app featuring drag-and-drop status columns, task prioritization tags, description fields, checklists, and local data persistence for individual developers.",
      tags: ["React", "HTML5 Drag-Drop", "Flex CSS"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"
    },
    {
      idx: '08',
      title: "Weatherly forecast",
      subtitle: "Real-Time Weather Monitor",
      desc: "A sleek weather forecaster fetching data from OpenWeather API. Displays 5-day trends, dynamic backgrounds matching current weather condition, wind speeds, humidity metrics, and local time zones.",
      tags: ["React", "ChartJS", "OpenWeather API"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
    },
    {
      idx: '09',
      title: "CryptoSphere Tracker",
      subtitle: "Cryptocurrency Aggregator",
      desc: "A real-time price aggregator dashboard fetching updates from the CoinGecko API. Compiles pricing charts, market caps, search filters, and user watchlist alerts with dark themed UI.",
      tags: ["React", "Axios", "CoinGecko API"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
    },
    {
      idx: '10',
      title: "EduPath LMS",
      subtitle: "Online Course Learning Platform",
      desc: "A modern landing page and backend mock for an online courses marketplace. Interactive categories, video preview panels, dashboard metrics, quiz modals, and checkout simulation interfaces.",
      tags: ["React", "CSS Modules", "Context API"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
    }
  ];

  return (
    <div className="portfolio-container-app">
      {/* Title Header */}
      <header className="app-header">
        <h1>INTEACTIVE 3D PORTFOLIO BOOK</h1>
        <p>Grab a corner or click the buttons below to flip through the story</p>
      </header>

      {/* Book Container withspine overlays */}
      <div className="book-wrapper">
        <div className="book-spine-lines"></div>

        <HTMLFlipBook
          width={530}
          height={715}
          size="stretch"
          minWidth={320}
          maxWidth={600}
          minHeight={450}
          maxHeight={800}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPageFlip}
          ref={bookRef}
          className="portfolio-book"
        >
          {/* PAGE 0: FRONT COVER */}
          <Page className="page-cover">
            <div className="cover-page">
              <span className="cover-badge">Interactive Portfolio</span>
              <div className="cover-avatar-container">
                <img src="/Logo.png" alt="Inoyatov M.Anasxon" className="cover-avatar" />
              </div>
              <h1 className="cover-title">INOYATOV M.ANASXON</h1>
              <h3 className="cover-subtitle">Web Developer</h3>
              <p className="cover-desc text-white opacity-80" style={{ maxWidth: '280px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                A showcase of modern web developments, front-end designs, and technical skills wrapped in a 3D book experience.
              </p>
              <div className="cover-footer font-medium">
                <span>EST. 2026 // OPEN BOOK</span>
              </div>
            </div>
          </Page>

          {/* PAGE 1: ABOUT MYSELF */}
          <Page className="page-left">
            <div className="page-inner-content">
              <div className="page-header">
                <span>About Myself</span>
                <span>Page 1</span>
              </div>

              <div className="profile-section">
                <div className="profile-img-holder">
                  <img src="/Logo.png" alt="M. Anasxon Inoyatov" />
                </div>
                <h2 className="profile-name">M. Anasxon Inoyatov</h2>
                <h3 className="profile-role">Web Developer</h3>

                {/* Social circles */}
                <div className="social-links">
                  <a href="https://t.me/torvensnow7" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bx bxl-telegram"></i>
                  </a>
                  <a href="https://vk.com/torvensnow" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bx bxl-vk"></i>
                  </a>
                  <a href="https://www.instagram.com/anasxon3450/" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://github.com/anasxoninoyatov3-eng" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>

                <p className="profile-desc">
                  Hello! I am M. Anasxon Inoyatov, a passionate Front-End Developer. I craft modern, fast, and responsive web
                  applications using React, JavaScript, and CSS. I turn complex designs into clean, pixel-perfect
                  code while ensuring seamless and engaging user experiences.
                </p>

                {/* Actions */}
                <div className="profile-cta">
                  <button className="primary-btn" onClick={() => flipTo(13)}>
                    <i className="bx bxs-envelope" style={{ marginRight: '0.4rem' }}></i> Contact Me
                  </button>
                  <a href="https://github.com/anasxoninoyatov3-eng" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                    <i className="bx bxl-github" style={{ marginRight: '0.4rem' }}></i> GitHub Profile
                  </a>
                </div>
              </div>

              <div className="page-footer">
                <span>Resume Folder</span>
                <span className="next-page-swipe" onClick={handleNext}>
                  Next <i className="bx bx-chevron-right"></i>
                </span>
              </div>
            </div>
          </Page>

          {/* PAGE 2: RESUME & EDUCATION */}
          <Page className="page-right">
            <div className="page-inner-content">
              <div className="page-header">
                <span>Resume & Capabilities</span>
                <span>Page 2</span>
              </div>

              <div>
                <h3 className="timeline-section-title">
                  <i className="bx bxs-certification"></i> Education
                </h3>
                <div className="education-timeline">
                  {/* Timeline with new entry */}
                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2020 - Present
                    </div>
                    <div className="timeline-title">Specialized School No. 2</div>
                    <div className="timeline-desc">
                      Deepening my knowledge in mathematics, physics, and computer science, building a solid academic foundation.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2022 - 2026
                    </div>
                    <div className="timeline-title">BS Computer Science</div>
                    <div className="timeline-desc">
                      Studying core computer science concepts, software engineering, algorithms, and advanced web development.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2018 - 2020
                    </div>
                    <div className="timeline-title">College Program</div>
                    <div className="timeline-desc">
                      Gained early exposure to programming basics, multimedia design, and general computer architecture.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2016 - 2018
                    </div>
                    <div className="timeline-title">High School Diploma</div>
                    <div className="timeline-desc">
                      Completed foundational studies with a strong focus on mathematics and logic, paving the way for tech.
                    </div>
                  </div>
                </div>

                {/* Tech Skills */}
                <h3 className="timeline-section-title">
                  <i className="bx bxs-cog"></i> Technical Skills
                </h3>
                <div className="skills-container">
                  <div>
                    <div className="skills-row-title">Frontend</div>
                    <div className="skills-badges">
                      <span className="skill-badge"><i className="bx bxl-html5"></i> HTML5</span>
                      <span className="skill-badge"><i className="bx bxl-css3"></i> CSS3</span>
                      <span className="skill-badge"><i className="bx bxl-javascript"></i> JS (ES6)</span>
                      <span className="skill-badge"><i className="bx bxl-react"></i> React.js</span>
                    </div>
                  </div>
                  <div>
                    <div className="skills-row-title">Backend & Design</div>
                    <div className="skills-badges">
                      <span className="skill-badge"><i className="bx bxl-nodejs"></i> Node.js</span>
                      <span className="skill-badge"><i className="bx bxl-python"></i> Python</span>
                      <span className="skill-badge"><i className="bx bxl-figma"></i> Figma UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="page-footer">
                <span className="prev-page-swipe" onClick={handlePrev}>
                  <i className="bx bx-chevron-left"></i> Previous
                </span>
                <span className="next-page-swipe" onClick={handleNext}>
                  Projects <i className="bx bx-chevron-right"></i>
                </span>
              </div>
            </div>
          </Page>

          {/* PAGES 3-12: PROJECTS PRESENTATION */}
          {projects.map((proj, index) => {
            const isLeft = index % 2 === 0;
            const pageNum = index + 3;
            return (
              <Page className={isLeft ? "page-left" : "page-right"} key={proj.idx}>
                <div className="page-inner-content">
                  <div className="page-header">
                    <span>Loyihalar to'plami / Projects</span>
                    <span>Page {pageNum}</span>
                  </div>

                  <div className="project-showcase">
                    <div className="project-meta">
                      <span className="project-idx">Project {proj.idx} / 10</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold' }}>Interactive Demo</span>
                    </div>

                    <h2 className="project-title">{proj.title}</h2>
                    <p style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: '600', marginBottom: '0.8rem' }}>{proj.subtitle}</p>

                    {/* Image Box */}
                    <div className="project-image-box">
                      {proj.image ? (
                        <img src={proj.image} alt={proj.title} />
                      ) : (
                        <div className="project-gradient-graphic" style={{ background: proj.gradient }}>
                          <i className={`bx ${proj.title.includes('Tour') ? 'bx-map-alt' : proj.title.includes('Clock') ? 'bx-time-five' : proj.title.includes('English') ? 'bx-book-open' : proj.title.includes('Game') ? 'bx-joystick' : proj.title.includes('Tales') ? 'bx-crown' : proj.title.includes('TaskFlow') ? 'bx-task' : proj.title.includes('Weather') ? 'bx-cloud-sun' : proj.title.includes('Crypto') ? 'bx-bitcoin' : 'bx-briefcase'} project-graphic-icon`}></i>
                        </div>
                      )}
                    </div>

                    <p className="project-desc-text">{proj.desc}</p>

                    {/* Tags */}
                    <div className="project-stack">
                      <div className="skills-badges">
                        {proj.tags.map((tag) => (
                          <span className="skill-badge" key={tag} style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="project-actions">
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="primary-btn">
                        <i className="bx bx-link-external" style={{ marginRight: '0.3rem' }}></i> Live Preview
                      </a>
                      <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" className="secondary-btn">
                        <i className="bx bxl-github" style={{ marginRight: '0.3rem' }}></i> Source Code
                      </a>
                    </div>
                  </div>

                  <div className="page-footer">
                    <span className="prev-page-swipe" onClick={handlePrev}>
                      <i className="bx bx-chevron-left"></i> Back
                    </span>
                    <span className="next-page-swipe" onClick={handleNext}>
                      Next <i className="bx bx-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </Page>
            );
          })}

          {/* PAGE 13: CONTACT ME */}
          <Page className="page-left">
            <div className="page-inner-content">
              <div className="page-header">
                <span>Contact Direct</span>
                <span>Page 13</span>
              </div>

              <div className="contact-section">
                <h2 className="profile-name" style={{ textAlign: 'center', marginBottom: '0.2rem' }}>Contact Me!</h2>
                <p className="contact-subtitle" style={{ textAlign: 'center' }}>Send directly to my Telegram inbox</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-input"
                      placeholder="Your Name (e.g. M. Anasxon)"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telegram-username">Telegram Username</label>
                    <input
                      type="text"
                      id="telegram-username"
                      className="form-input"
                      placeholder="Telegram user (e.g. @username)"
                      value={formState.telegramUser}
                      onChange={(e) => setFormState({ ...formState, telegramUser: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-input"
                      placeholder="Describe your proposal or question..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="primary-btn form-submit-btn" disabled={loading}>
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <i className="bx bxs-paper-plane" style={{ marginRight: '0.4rem' }}></i> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="page-footer">
                <span className="prev-page-swipe" onClick={handlePrev}>
                  <i className="bx bx-chevron-left"></i> Back
                </span>
                <span className="next-page-swipe" onClick={handleNext}>
                  Close Cover <i className="bx bx-chevron-right"></i>
                </span>
              </div>
            </div>
          </Page>

          {/* PAGE 14: BACK COVER */}
          <Page className="page-cover">
            <div className="back-cover-page">
              <i className="bx bxs-book-heart back-cover-logo"></i>
              <h2 className="cover-title" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>THE END</h2>
              <p className="back-cover-text">
                Thank you for reading through my 3D book portfolio. Let's create something great together!
              </p>
              <div className="cover-footer font-medium" style={{ marginTop: '3rem' }}>
                <span onClick={() => flipTo(0)} style={{ cursor: 'pointer', color: 'var(--gold-accent)', textDecoration: 'underline' }}>
                  Back to Cover
                </span>
              </div>
            </div>
          </Page>

        </HTMLFlipBook>
      </div>

      {/* Glassmorphic Navigation Dock */}
      <nav className="glass-nav-dock">
        <button
          className={`nav-dock-btn ${currentPage === 0 ? 'active' : ''}`}
          onClick={() => flipTo(0)}
        >
          <i className="bx bxs-book"></i> Cover
        </button>

        <button
          className={`nav-dock-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => flipTo(1)}
        >
          <i className="bx bxs-user"></i> About
        </button>

        <button
          className={`nav-dock-btn ${currentPage === 2 ? 'active' : ''}`}
          onClick={() => flipTo(2)}
        >
          <i className="bx bxs-graduation"></i> Resume
        </button>

        <button
          className={`nav-dock-btn ${currentPage >= 3 && currentPage <= 12 ? 'active' : ''}`}
          onClick={() => flipTo(3)}
        >
          <i className="bx bxs-briefcase"></i> Projects ({currentPage >= 3 && currentPage <= 12 ? `${currentPage - 2}/10` : '10'})
        </button>

        <button
          className={`nav-dock-btn ${currentPage === 13 ? 'active' : ''}`}
          onClick={() => flipTo(13)}
        >
          <i className="bx bxs-envelope"></i> Contact
        </button>
      </nav>
    </div>
  );
}

export default App;
