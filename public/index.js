// Navbar Component
function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="fixed w-full z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-blue-200" aria-label="Home">Adeel Shaikh</a>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" onClick={e => handleNavClick(e, 'about')} className="hover:text-blue-300 focus:outline-none focus:text-blue-300">About</a></li>
          <li><a href="#projects" onClick={e => handleNavClick(e, 'projects')} className="hover:text-blue-300 focus:outline-none focus:text-blue-300">Projects</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="hover:text-blue-300 focus:outline-none focus:text-blue-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="hero" className="pt-36 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <img src="images/adeel_headshot.jpeg" alt="Adeel Shaikh headshot" className="w-56 h-56 rounded-full object-cover mb-6 shadow-xl border-4 border-blue-600 bg-white" />
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

// Projects Section
function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-10 text-blue-800">Highlighted Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Customer Data Manager<br/><span className='text-base text-blue-700'>KnitWell Group, Remote (Jul 2024 - Current)</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Lead a team of 10+ data engineers, analysts, and PMs to drive customer data initiatives</li>
            <li>Supervise CDP data administration, ensuring accuracy, security, and compliance</li>
            <li>Collaborate with marketing and business teams to optimize campaigns and retention</li>
            <li>Manage vendor relationships and ensure project success</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Technical Product Owner - Customer Data Platform<br/><span className='text-base text-blue-700'>Johnson & Johnson, Remote (May 2023 - Jul 2024)</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Directed a team of 6 data engineers for timely, on-budget project delivery</li>
            <li>Defined product vision, strategy, and managed $1.1M+ cost of ownership</li>
            <li>Implemented data governance and compliance (DSAR, AMA)</li>
            <li>Leveraged AI and data assets for omni-channel personalization and insights</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Data Scientist (Stretch Assignment)<br/><span className='text-base text-blue-700'>Johnson & Johnson, Remote (Nov 2023 - Jul 2024)</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Developed predictive analytics dashboard for GTN forecasting using Python & Prophet</li>
            <li>Built Flask web app for interactive data visualization and insights</li>
            <li>Integrated and preprocessed data from multiple sources for high-quality models</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Product Analyst - Janssen Omnichannel Experience<br/><span className='text-base text-blue-700'>Johnson & Johnson, Remote (Jun 2021 - May 2023)</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Created master segments for 360° customer journey view</li>
            <li>Automated data flows, saving 75% manual effort</li>
            <li>Developed dashboards and led data governance for C360 platform</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Industrial Engineering Intern<br/><span className='text-base text-blue-700'>Lowes, Kissimmee, FL (May 2019 - Aug 2019)</span></h3>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Created a database that reduced lead time and saved $875,000 annually</li>
            <li>Implemented 6S auditing and led Kaizen events for process improvement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    try {
      const res = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Message sent!');
        form.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('Error sending message.');
    }
  };
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-4" aria-labelledby="contact-heading">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4" name="contact" autoComplete="off" aria-label="Contact form">
          <label htmlFor="name" className="text-lg text-blue-900">Name</label>
          <input id="name" name="name" type="text" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <label htmlFor="email" className="text-lg text-blue-900">Email</label>
          <input id="email" name="email" type="email" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <label htmlFor="message" className="text-lg text-blue-900">Message</label>
          <textarea id="message" name="message" rows="5" required className="p-3 rounded bg-slate-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
          <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">Send Message</button>
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
    React.createElement(React.Fragment, null,
      React.createElement(Navbar, null),
      React.createElement("main", { className: "pt-20" },
        React.createElement(Hero, null),
        React.createElement(About, null),
        React.createElement(Projects, null),
        React.createElement(Contact, null)
      ),
      React.createElement(Footer, null)
    )
  );
}

// Render
ReactDOM.render(<App />, document.getElementById('root')); 