'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <div className={styles.navContainer}>
          <div className={styles.logo}>Portfolio</div>
          <ul className={styles.navLinks}>
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? styles.active : ''}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.imageContainer}>
                <div className={styles.profileImage}>
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Profile illustration">
                    <circle cx="100" cy="100" r="100" fill="#6366f1"/>
                    <circle cx="100" cy="80" r="30" fill="#e2e8f0"/>
                    <ellipse cx="100" cy="150" rx="50" ry="60" fill="#e2e8f0"/>
                  </svg>
                </div>
              </div>
              <div className={styles.aboutText}>
                <h1 className={styles.mainHeading}>Hi, I'm Alex Carter</h1>
                <h2 className={styles.subHeading}>Full-Stack Web Developer</h2>
                <p className={styles.description}>
                  I craft beautiful, functional web experiences with modern technologies.
                  With 5+ years of experience, I specialize in building scalable applications
                  that solve real-world problems. My passion lies in creating intuitive interfaces
                  and writing clean, maintainable code.
                </p>
                <button
                  className={styles.ctaButton}
                  onClick={() => scrollToSection('contact')}
                  aria-label="Get in touch"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectGrid}>
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
                  tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
                  demo: '#',
                  github: '#',
                  color: '#3b82f6'
                },
                {
                  title: 'Task Management App',
                  description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team communication features.',
                  tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
                  demo: '#',
                  github: '#',
                  color: '#8b5cf6'
                },
                {
                  title: 'Weather Dashboard',
                  description: 'Beautiful weather application with location-based forecasts, interactive maps, and customizable alerts.',
                  tech: ['Vue.js', 'OpenWeather API', 'Chart.js'],
                  demo: '#',
                  github: '#',
                  color: '#06b6d4'
                },
                {
                  title: 'Portfolio CMS',
                  description: 'Headless CMS for creative professionals to showcase their work with customizable templates and SEO optimization.',
                  tech: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
                  demo: '#',
                  github: '#',
                  color: '#f59e0b'
                },
                {
                  title: 'Fitness Tracker',
                  description: 'Health and fitness tracking app with workout plans, progress visualization, and nutrition logging.',
                  tech: ['React Native', 'Firebase', 'Redux'],
                  demo: '#',
                  github: '#',
                  color: '#10b981'
                },
                {
                  title: 'AI Chat Assistant',
                  description: 'Intelligent chatbot with natural language processing for customer support automation and FAQ handling.',
                  tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
                  demo: '#',
                  github: '#',
                  color: '#ec4899'
                }
              ].map((project, index) => (
                <article key={index} className={styles.projectCard}>
                  <div className={styles.projectImagePlaceholder} style={{ backgroundColor: project.color }}>
                    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="20" y="30" width="60" height="60" rx="8" fill="white" opacity="0.2"/>
                      <rect x="90" y="30" width="90" height="20" rx="4" fill="white" opacity="0.2"/>
                      <rect x="90" y="60" width="70" height="15" rx="4" fill="white" opacity="0.2"/>
                    </svg>
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      <a href={project.demo} className={styles.projectLink} aria-label={`View ${project.title} live demo`}>
                        Live Demo →
                      </a>
                      <a href={project.github} className={styles.projectLink} aria-label={`View ${project.title} on GitHub`}>
                        GitHub →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <div className={styles.skillsContainer}>
              <div className={styles.skillsGrid}>
                {[
                  { name: 'JavaScript/TypeScript', level: 95, icon: 'JS' },
                  { name: 'React & Next.js', level: 90, icon: 'R' },
                  { name: 'Node.js & Express', level: 88, icon: 'N' },
                  { name: 'HTML & CSS', level: 95, icon: 'H' },
                  { name: 'Python', level: 82, icon: 'P' },
                  { name: 'SQL & NoSQL', level: 85, icon: 'DB' },
                  { name: 'Git & CI/CD', level: 90, icon: 'G' },
                  { name: 'AWS & Cloud', level: 78, icon: 'C' }
                ].map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <div className={styles.skillIcon} aria-hidden="true">{skill.icon}</div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <div className={styles.progressBar} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency: ${skill.level}%`}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className={styles.skillLevel} aria-hidden="true">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <p className={styles.contactText}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className={styles.socialLinks}>
                  <a href="https://github.com" className={styles.socialLink} aria-label="GitHub profile">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn profile">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter profile">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>
              <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert('Form submitted! (Demo only)') }}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    required
                    aria-required="true"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    required
                    aria-required="true"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    rows={5}
                    required
                    aria-required="true"
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
