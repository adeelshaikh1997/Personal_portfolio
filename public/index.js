// Utility: FadeInSection for animation on scroll
function FadeInSection({ id, children }) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'} ${children.props.className || ''}`}
      aria-labelledby={children.props['aria-labelledby']}
    >
      {React.cloneElement(children, { className: '' })}
    </section>
  );
}

// Navbar Component
function Navbar() {
  const active = useScrollSpy(sectionIds);
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="fixed w-full z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-blue-200" aria-label="Home">Adeel Shaikh</a>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" onClick={e => handleNavClick(e, 'about')} className={active==='about' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>About</a></li>
          <li><a href="#skills" onClick={e => handleNavClick(e, 'skills')} className={active==='skills' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>Skills</a></li>
          <li><a href="#certifications" onClick={e => handleNavClick(e, 'certifications')} className={active==='certifications' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>Certifications</a></li>
          <li><a href="#projects" onClick={e => handleNavClick(e, 'projects')} className={active==='projects' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>Projects</a></li>
          <li><a href="#outside-work" onClick={e => handleNavClick(e, 'outside-work')} className={active==='outside-work' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>Outside Work</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, 'contact')} className={active==='contact' ? 'text-blue-400 font-bold underline' : 'hover:text-blue-300 focus:outline-none focus:text-blue-300'}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="hero" className="pt-36 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <img src="images/adeel_headshot.jpeg" alt="Adeel Shaikh headshot" className="w-56 h-46 rounded-full object-cover object-top mb-6 shadow-xl border-4 border-blue-600 bg-white" />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900">Hi, I'm <span className="text-blue-600">Adeel Shaikh</span></h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-800">Customer Data Manager & Technical Product Owner</h2>
      <p className="max-w-xl mx-auto text-lg md:text-xl mb-8 text-slate-800">
        Experienced data leader and product owner with a proven track record in customer data platforms, data engineering, and analytics. Passionate about driving business value through data, leading cross-functional teams, and delivering innovative solutions in healthcare and retail.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
        <a href="mailto:adeel97@hotmail.com" className="text-blue-700 hover:underline flex items-center"><span className="mr-2"></span>adeel97@hotmail.com</a>
        <a href="https://www.linkedin.com/in/adeelshaikh1997" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center"><span className="mr-2"></span>LinkedIn</a>
        <a href="tel:+18138417488" className="text-blue-700 hover:underline flex items-center"><span className="mr-2"></span>(813) 841-7488</a>
      </div>
      <a href="#projects" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={e => {e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });}}>View Projects</a>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-4" aria-labelledby="about-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">About Me</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-4">
          I am a results-driven Customer Data Manager and Technical Product Owner with experience leading teams, managing large-scale data projects, and optimizing customer data strategies for top organizations like KnitWell Group and Johnson & Johnson. My expertise spans data engineering, analytics, product management, and omni-channel marketing, with a strong focus on data accuracy, compliance, and business impact.
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-4">
          <li>Led teams of 6-10+ engineers, analysts, and managers to deliver data-driven solutions</li>
          <li>Expert in Customer Data Platforms (CDP), data governance, and marketing analytics</li>
          <li>Skilled in Python, SQL, Tableau, AWS, Azure, and modern data tools</li>
          <li>Fluent in English, Hindi, and Urdu</li>
        </ul>
        <p className="text-slate-700">B.S. in Industrial and Systems Engineering (Cum Laude), University of Florida</p>
      </div>
    </section>
  );
}

// Projects Carousel
function Projects() {
  const projects = [
    {
      title: 'Customer Data Manager',
      org: 'KnitWell Group, Remote (Jul 2024 - Current)',
      bullets: [
        'Lead a team of 10+ data engineers, analysts, and PMs to drive customer data initiatives',
        'Supervise CDP data administration, ensuring accuracy, security, and compliance',
        'Collaborate with marketing and business teams to optimize campaigns and retention',
        'Manage vendor relationships and ensure project success'
      ]
    },
    {
      title: 'Technical Product Owner - Customer Data Platform',
      org: 'Johnson & Johnson, Remote (May 2023 - Jul 2024)',
      bullets: [
        'Directed a team of 6 data engineers for timely, on-budget project delivery',
        'Defined product vision, strategy, and managed $1.1M+ cost of ownership',
        'Implemented data governance and compliance (DSAR, AMA)',
        'Leveraged AI and data assets for omni-channel personalization and insights'
      ]
    },
    {
      title: 'Data Scientist (Stretch Assignment)',
      org: 'Johnson & Johnson, Remote (Nov 2023 - Jul 2024)',
      bullets: [
        'Developed predictive analytics dashboard for GTN forecasting using Python & Prophet',
        'Built Flask web app for interactive data visualization and insights',
        'Integrated and preprocessed data from multiple sources for high-quality models'
      ]
    },
    {
      title: 'Product Analyst - Janssen Omnichannel Experience',
      org: 'Johnson & Johnson, Remote (Jun 2021 - May 2023)',
      bullets: [
        'Created master segments for 360° customer journey view',
        'Automated data flows, saving 75% manual effort',
        'Developed dashboards and led data governance for C360 platform'
      ]
    },
    {
      title: 'Industrial Engineering Intern',
      org: 'Lowes, Kissimmee, FL (May 2019 - Aug 2019)',
      bullets: [
        'Created a database that reduced lead time and saved $875,000 annually',
        'Implemented 6S auditing and led Kaizen events for process improvement'
      ]
    }
  ];
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx(i => (i - 1 + projects.length) % projects.length);
  const next = () => setIdx(i => (i + 1) % projects.length);
  const project = projects[idx];
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-10 text-blue-800">Highlighted Experience</h2>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl mb-6 transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">{project.title}<br /><span className="text-base text-blue-700">{project.org}</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <div className="flex gap-4">
          <button onClick={prev} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow">❮ Prev</button>
          <button onClick={next} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow">Next ❯</button>
        </div>
        <div className="mt-4 text-blue-700">{idx + 1} / {projects.length}</div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-4" aria-labelledby="contact-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Contact</h2>
        <form
          action="https://formspree.io/f/xrblpovj"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <label htmlFor="name" className="text-lg text-blue-900">Name</label>
          <input id="name" name="name" type="text" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />

          <label htmlFor="email" className="text-lg text-blue-900">Email</label>
          <input id="email" name="email" type="email" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />

          <label htmlFor="message" className="text-lg text-blue-900">Message</label>
          <textarea id="message" name="message" rows="5" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>

          <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-blue-900 text-center">
          <div className="mb-2"><span className="font-semibold">Email:</span> adeel97@hotmail.com</div>
          <div className="mb-2"><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/adeelshaikh1997" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">/in/adeelshaikh1997</a></div>
          <div><span className="font-semibold">Phone:</span> (813) 841-7488</div>
        </div>
      </div>
    </section>
  );
}

// Expandable Skills
function Skills() {
  const skills = [
    { title: 'Languages', details: 'Python, SQL, R, HTML' },
    { title: 'Data & Analytics', details: 'Pandas, Numpy, Scikit-learn, Tableau, Prophet Model, Time Series Forecasting, Machine Learning' },
    { title: 'Cloud & Tools', details: 'AWS, Microsoft Azure, Power Apps, Power Automate' },
    { title: 'Platforms', details: 'CDP (Treasure Data), Redpoint Data Management/Interaction, Salesforce Marketing Cloud, Veeva' },
    { title: 'Automation', details: 'Digdag, Microsoft Power Automate' },
    { title: 'Other', details: 'Atlassian Suite (Jira/Confluence/BitBucket), Git, Basic RESTful API dev, Postman, Snowflake' },
    { title: 'Soft Skills', details: 'Agile/Scrum, Leadership, Product Management, Fluent in English, Hindi, Urdu' }
  ];
  const [open, setOpen] = React.useState(null);
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-4" aria-labelledby="skills-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Skills</h2>
        <ul className="space-y-2">
          {skills.map((s, i) => (
            <li key={i}>
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full text-left text-lg text-blue-900 font-semibold focus:outline-none flex justify-between items-center">
                {s.title}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="pl-4 py-2 text-slate-800 text-base">{s.details}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Expandable Certifications
function Certifications() {
  const certs = [
    { title: 'Certified Scrum Master (CSM)', details: 'Scrum Alliance' },
    { title: 'Tableau Desktop Specialist', details: '' },
    { title: 'Microsoft Certified: Azure Fundamentals', details: '' },
    { title: 'Six Sigma Yellow Belt', details: '' },
    { title: 'Other certifications available upon request', details: '' }
  ];
  const [open, setOpen] = React.useState(null);
  return (
    <section id="certifications" className="max-w-4xl mx-auto py-20 px-4" aria-labelledby="certifications-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="certifications-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Certifications</h2>
        <ul className="space-y-2">
          {certs.map((c, i) => (
            <li key={i}>
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full text-left text-lg text-blue-900 font-semibold focus:outline-none flex justify-between items-center">
                {c.title}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && c.details && <div className="pl-4 py-2 text-slate-800 text-base">{c.details}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Outside Work
function OutsideWork() {
  return (
    <section id="outside-work" className="max-w-4xl mx-auto py-20 px-4" aria-labelledby="outsidework-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="outsidework-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Outside Work</h2>
        <p className="text-lg text-slate-800 mb-4">When I'm not working on data or product challenges, I love to:</p>
        <ul className="list-disc list-inside text-slate-800 text-lg mb-4">
          <li>Travel and explore new cultures and cuisines</li>
          <li>Play and watch soccer (avid fan!)</li>
          <li>Work on fun coding side projects and hackathons</li>
          <li>Mentor students and early-career professionals</li>
          <li>Read about technology, business, and psychology</li>
        </ul>
        <p className="text-slate-700">I believe a balanced life fuels creativity and innovation in my professional work!</p>
      </div>
    </section>
  );
}

// Fun Facts/Thoughts Rotator
function FunFacts() {
  const facts = [
    'I love snowboarding and have traveled to the Rockies for a 3-month adventure.',
    'I enjoy hackathons and building fun side projects with friends.',
    'Soccer is my favorite sport—both playing and watching!',
    'I’m passionate about mentoring students and early-career professionals.',
    'I enjoy reading about technology, business, and psychology.'
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % facts.length), 4000);
    return () => clearInterval(timer);
  }, [facts.length]);
  return (
    <section className="max-w-4xl mx-auto py-20 px-4" aria-labelledby="funfacts-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 id="funfacts-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">A Few Fun Facts</h2>
        <div className="text-xl text-blue-900 font-semibold min-h-[3rem] transition-all duration-500 ease-in-out">
          {facts[idx]}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 text-center text-blue-100 text-sm bg-blue-900">
      <p>&copy; {new Date().getFullYear()} Adeel Shaikh. All rights reserved.</p>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <FadeInSection id="hero"><Hero /></FadeInSection>
        <FadeInSection id="about"><About /></FadeInSection>
        <FadeInSection id="skills"><Skills /></FadeInSection>
        <FadeInSection id="certifications"><Certifications /></FadeInSection>
        <FadeInSection id="projects"><Projects /></FadeInSection>
        <FadeInSection id="outside-work"><OutsideWork /></FadeInSection>
        <FadeInSection id="fun-facts"><FunFacts /></FadeInSection>
        <FadeInSection id="contact"><Contact /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
}

// Utility: FadeInSection for animation on scroll
function FadeInSection({ id, children }) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'} ${children.props.className || ''}`}
      aria-labelledby={children.props['aria-labelledby']}
    >
      {React.cloneElement(children, { className: '' })}
    </section>
  );
}

// Utility: useScrollSpy for active navigation
const sectionIds = [
  'hero', 'about', 'skills', 'certifications', 'projects', 'outside-work', 'contact'
];

function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const handleScroll = () => {
      let found = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) found = id;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);
  return active;
}

// Render
ReactDOM.render(<App />, document.getElementById('root')); 