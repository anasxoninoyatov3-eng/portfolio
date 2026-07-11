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

  const flipTo = (pageIdx) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageIdx);
    }
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

  const projects = [
    {
      idx: '01',
      title: "Mazza Food",
      subtitle: "Ovqat yetkazib berish & Bot integratsiyasi",
      desc: "Zamonaviy, to'liq moslashuvchan ovqat buyurtma va yetkazib berish veb-ilovasi. Python asosidagi Telegram bot va mobil veb-wrapper bilan real vaqtda xabarnomalar, buyurtmalarni boshqarish va jonli menyu integratsiyasi.",
      tags: ["React", "CSS3", "Python Bot", "Telegram API"],
      image: "/website 3.png",
      liveLink: "https://www.mazza-food.uz",
      codeLink: "https://github.com/anasxoninoyatov3-eng/mazza-food",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      idx: '02',
      title: "Anas Tour",
      subtitle: "Sayohat Bron Qilish Platformasi",
      desc: "Ko'zni qamashtiruvchi va interaktiv turizm landing platformasi. Dinamik paketlar, interaktiv marshrut rejalari, sharhlar bo'limi va silliq aylantirish animatsiyalari bilan.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      image: "",
      liveLink: "https://anastour.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/anas-tour",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
      idx: '03',
      title: "IMA Clock",
      subtitle: "Dinamik Aqlli Soat",
      desc: "Real vaqt soati ilovasi — analog va raqamli UI dizaynlar, taymdown, sekundomer va silliq animatsiyadagi soat mili harakatli qoʻngʻiroqlar bilan.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      image: "",
      liveLink: "https://ima-clock.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/ima-clock",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
    },
    {
      idx: '04',
      title: "English New Kelajak",
      subtitle: "Interaktiv E-Learning Portali",
      desc: "Ingliz tilini o'rganuvchilar uchun mo'ljallangan ta'lim platformasi. Interaktiv darslar, audio-vizual testlar, kuzatuv modullari va o'zbek o'quvchilari uchun tarjima qo'llanmalari.",
      tags: ["React", "CSS3", "Vite", "Netlify"],
      image: "",
      liveLink: "https://english-new-kelajak.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/english-new-kelajak",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    {
      idx: '05',
      title: "AI Clicker O'yini",
      subtitle: "Bosqichli Idle O'yini",
      desc: "Futuristik sun'iy intellekt mavzusidagi qiziqarli bosqichli o'yin. O'yinchilar klik qiladi va yangilanishlar sotib oladi (neyromorf chiplar, bulut klasterlar) sun'iy intellekt ballari to'plash uchun.",
      tags: ["React", "Tailwind CSS", "Local Storage"],
      image: "",
      liveLink: "https://ai-clicker.netlify.app",
      codeLink: "https://github.com/anasxoninoyatov3-eng/ai-clicker",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
    },
    {
      idx: '06',
      title: "O'zbek Ertaklari",
      subtitle: "Interaktiv Ertak O'quvchisi",
      desc: "O'zbek folklorini dinamik rasmlar va audio imkoniyatlar bilan taqdim etuvchi raqamli kutubxona. Foydalanuvchilar 'Zumrad va Qimmat' kabi ertaklarni chiroyli elektron kitob interfeysi orqali o'qishi mumkin.",
      tags: ["React", "Tailwind CSS", "JSON Db", "Ertak"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)"
    },
    {
      idx: '07',
      title: "TaskFlow Dashboard",
      subtitle: "Minimalist Kanban Rejalashtiruvchi",
      desc: "Drag-and-drop holat ustunlari, vazifa ustuvorlik teglari, tavsif maydonlari, nazorat ro'yxatlari va mahalliy ma'lumotlarni saqlash bilan Kanban uslubidagi vazifa taxtasi.",
      tags: ["React", "HTML5 Drag-Drop", "Flex CSS"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"
    },
    {
      idx: '08',
      title: "Weatherly Ob-havo",
      subtitle: "Real Vaqt Ob-havo Monitori",
      desc: "OpenWeather API'dan ma'lumot oluvchi zamonaviy ob-havo bashoratchi. 5 kunlik tendensiyalar, dinamik orqa fon, shamol tezligi, namlik ko'rsatkichlari va mahalliy vaqt zonalari.",
      tags: ["React", "ChartJS", "OpenWeather API"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
    },
    {
      idx: '09',
      title: "CryptoSphere Tracker",
      subtitle: "Kriptovalyuta Agregatori",
      desc: "CoinGecko API'dan yangilanishlarni oladigan real vaqt narx agregatori dashboard. Narx grafiklari, bozor kapitalizatsiyasi, qidiruv filtrlari va foydalanuvchi kuzatuv ro'yxati bilan.",
      tags: ["React", "Axios", "CoinGecko API"],
      image: "",
      liveLink: "https://github.com/anasxoninoyatov3-eng",
      codeLink: "https://github.com/anasxoninoyatov3-eng",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)"
    },
    {
      idx: '10',
      title: "EduPath LMS",
      subtitle: "Onlayn Kurslar O'quv Platformasi",
      desc: "Onlayn kurslar bozori uchun zamonaviy landing sahifa va backend maketi. Interaktiv kategoriyalar, video preview panellari, dashboard ko'rsatkichlari, test modallari va to'lov simulyatsiyasi.",
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
        <h1>3D PORTFOLIO KITOB</h1>
        <p>Sahifani burish uchun burchakni tortib siljiting</p>
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
          ref={bookRef}
          className="portfolio-book"
        >
          {/* PAGE 0: FRONT COVER */}
          <Page className="page-cover">
            <div className="cover-page">
              <span className="cover-badge">Interaktiv Portfolio</span>
              <div className="cover-avatar-container">
                <img src="/Logo.png" alt="Inoyatov M.Anasxon" className="cover-avatar" />
              </div>
              <h1 className="cover-title">INOYATOV M.ANASXON</h1>
              <h3 className="cover-subtitle">Veb Dasturchi</h3>
              <p className="cover-desc text-white opacity-80" style={{ maxWidth: '280px', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Zamonaviy veb-ishlanmalar, front-end dizaynlar va texnik ko'nikmalar to'plami — 3D kitob tajribasida.
              </p>
            </div>
          </Page>

          {/* SAHIFA 1: MEN HAQIMDA */}
          <Page className="page-left">
            <div className="page-inner-content">
              <div className="page-header">
                <span>Men Haqimda</span>
                <span>1-sahifa</span>
              </div>

              <div className="profile-section">
                <div className="profile-img-holder">
                  <img src="/Logo.png" alt="M. Anasxon Inoyatov" />
                </div>
                <h2 className="profile-name">M. Anasxon Inoyatov</h2>
                <h3 className="profile-role">Veb Dasturchi</h3>

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
                  Salom! Men M. Anasxon Inoyatov — ishtiyoqli Front-End dasturchiman. React, JavaScript va CSS yordamida zamonaviy, tez va moslashuvchan veb-ilovalar yarataman. Murakkab dizaynlarni piksel darajasida aniq, sof kodga aylantirib, foydalanuvchilarga silliq va qiziqarli tajriba taqdim etaman.
                </p>

                <div className="profile-cta">
                  <button className="primary-btn" onClick={() => flipTo(13)}>
                    <i className="bx bxs-envelope" style={{ marginRight: '0.4rem' }}></i> Bog'lanish
                  </button>
                  <a href="https://github.com/anasxoninoyatov3-eng" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                    <i className="bx bxl-github" style={{ marginRight: '0.4rem' }}></i> GitHub Sahifa
                  </a>
                </div>
              </div>

            </div>
          </Page>

          {/* SAHIFA 2: RESUME & TA'LIM */}
          <Page className="page-right">
            <div className="page-inner-content">
              <div className="page-header">
                <span>Rezyume va Ko'nikmalar</span>
                <span>2-sahifa</span>
              </div>

              <div>
                <h3 className="timeline-section-title">
                  <i className="bx bxs-certification"></i> Ta'lim
                </h3>
                <div className="education-timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2020 - Hozir
                    </div>
                    <div className="timeline-title">2-son ixtisoslashtirilgan maktab</div>
                    <div className="timeline-desc">
                      Matematika, fizika va informatika bo'yicha bilimlarni chuqurlashtirib, mustahkam akademik poydevor yaratmoqda.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2022 - 2026
                    </div>
                    <div className="timeline-title">Bakalavr — Kompyuter Fanlari</div>
                    <div className="timeline-desc">
                      Kompyuter fanlari kontseptsiyalari, dasturiy ta'minot muhandisligi, algoritmlar va ilg'or veb-ishlanmalarni o'rganmoqda.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2018 - 2020
                    </div>
                    <div className="timeline-title">Kollej Dasturi</div>
                    <div className="timeline-desc">
                      Dasturlash asoslari, multimedia dizayn va kompyuter arxitekturasiga ilk tanishuv, kodlashga qiziqishni uyg'otgan.
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-date">
                      <i className="bx bxs-calendar"></i> 2016 - 2018
                    </div>
                    <div className="timeline-title">O'rta Maktab Diplomi</div>
                    <div className="timeline-desc">
                      Matematika va mantiqqa kuchli e'tibor bilan asosiy ta'lim yakunlangan, texnologiya yo'lida poydevor qo'yilgan.
                    </div>
                  </div>
                </div>

                <h3 className="timeline-section-title">
                  <i className="bx bxs-cog"></i> Texnik Ko'nikmalar
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
                    <div className="skills-row-title">Backend va Dizayn</div>
                    <div className="skills-badges">
                      <span className="skill-badge"><i className="bx bxl-nodejs"></i> Node.js</span>
                      <span className="skill-badge"><i className="bx bxl-python"></i> Python</span>
                      <span className="skill-badge"><i className="bx bxl-figma"></i> Figma UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Page>

          {/* SAHIFALAR 3-12: LOYIHALAR */}
          {projects.map((proj, index) => {
            const isLeft = index % 2 === 0;
            const pageNum = index + 3;
            return (
              <Page className={isLeft ? "page-left" : "page-right"} key={proj.idx}>
                <div className="page-inner-content">
                  <div className="page-header">
                    <span>Loyihalar To'plami</span>
                    <span>{pageNum}-sahifa</span>
                  </div>

                  <div className="project-showcase">
                    <div className="project-meta">
                      <span className="project-idx">Loyiha {proj.idx} / 10</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold' }}>Interaktiv Demo</span>
                    </div>

                    <h2 className="project-title">{proj.title}</h2>
                    <p style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: '600', marginBottom: '0.8rem' }}>{proj.subtitle}</p>

                    <div className="project-image-box">
                      {proj.image ? (
                        <img src={proj.image} alt={proj.title} />
                      ) : (
                        <div className="project-gradient-graphic" style={{ background: proj.gradient }}>
                          <i className={`bx ${proj.title.includes('Tour') ? 'bx-map-alt' : proj.title.includes('Clock') ? 'bx-time-five' : proj.title.includes('English') ? 'bx-book-open' : proj.title.includes('O\'yin') ? 'bx-joystick' : proj.title.includes('Ertaklar') ? 'bx-crown' : proj.title.includes('TaskFlow') ? 'bx-task' : proj.title.includes('Ob-havo') ? 'bx-cloud-sun' : proj.title.includes('Crypto') ? 'bx-bitcoin' : 'bx-briefcase'} project-graphic-icon`}></i>
                        </div>
                      )}
                    </div>

                    <p className="project-desc-text">{proj.desc}</p>

                    <div className="project-stack">
                      <div className="skills-badges">
                        {proj.tags.map((tag) => (
                          <span className="skill-badge" key={tag} style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="primary-btn">
                        <i className="bx bx-link-external" style={{ marginRight: '0.3rem' }}></i> Jonli Ko'rinish
                      </a>
                      <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" className="secondary-btn">
                        <i className="bx bxl-github" style={{ marginRight: '0.3rem' }}></i> Manba Kodi
                      </a>
                    </div>
                  </div>

                </div>
              </Page>
            );
          })}

          {/* SAHIFA 13: BOG'LANISH */}
          <Page className="page-left">
            <div className="page-inner-content">
              <div className="page-header">
                <span>Bog'lanish</span>
                <span>13-sahifa</span>
              </div>

              <div className="contact-section">
                <h2 className="profile-name" style={{ textAlign: 'center', marginBottom: '0.2rem' }}>Bog'lanish!</h2>
                <p className="contact-subtitle" style={{ textAlign: 'center' }}>Telegramga to'g'ridan-to'g'ri xabar yuboring</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullname">To'liq Ism</label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-input"
                      placeholder="Ismingiz (masalan: M. Anasxon)"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telegram-username">Telegram Foydalanuvchi nomi</label>
                    <input
                      type="text"
                      id="telegram-username"
                      className="form-input"
                      placeholder="Telegram (masalan: @username)"
                      value={formState.telegramUser}
                      onChange={(e) => setFormState({ ...formState, telegramUser: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Xabaringiz</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      className="form-input"
                      placeholder="Taklif yoki savolingizni yozing..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="primary-btn form-submit-btn" disabled={loading}>
                    {loading ? (
                      <span>Yuborilmoqda...</span>
                    ) : (
                      <>
                        <i className="bx bxs-paper-plane" style={{ marginRight: '0.4rem' }}></i> Xabar Yuborish
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </Page>

          {/* SAHIFA 14: ORQA MUQOVA */}
          <Page className="page-cover">
            <div className="back-cover-page">
              <i className="bx bxs-book-heart back-cover-logo"></i>
              <h2 className="cover-title" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>OXIRI</h2>
              <p className="back-cover-text">
                3D portfolio kitobimni o'qiganingiz uchun rahmat. Keling, birgalikda ajoyib narsa yarataylik!
              </p>
              <div className="cover-footer font-medium" style={{ marginTop: '3rem' }}>
                <span onClick={() => flipTo(0)} style={{ cursor: 'pointer', color: 'var(--accent-color)', textDecoration: 'underline' }}>
                  Muqovaga qaytish
                </span>
              </div>
            </div>
          </Page>

        </HTMLFlipBook>
      </div>


    </div>
  );
}

export default App;
