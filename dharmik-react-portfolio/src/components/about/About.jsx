import React from 'react';
import './About.css';
import Image from '../../assets/memoji.webp';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Dharmik Patel" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I’m <span className="highlight-primary">Dharmik Patel</span><br />
                            I’m based in <strong>Ontario</strong>, where I’m <span className="highlight-secondary">crafting the future of data engineering and analytics</span>.<br /><br />
                            I am a <span className="highlight-accent">self-driven, career-oriented data enthusiast</span> specializing in <strong>big data technologies, cloud computing</strong>, and <strong>data pipeline automation</strong>. Currently, I am pursuing a <strong>diploma in Computer Systems Technology – Software Development and Network Engineering</strong> at <span className="highlight-tertiary">Sheridan College</span>, where I have achieved a GPA of <span className="highlight-gold">3.58/4</span>.
                            <br /><br />
                            My expertise lies in <span className="highlight-info">designing and implementing data workflows</span>, from <span className="highlight-process">ETL processes to data warehousing and visualization</span>. I work with technologies like <span className="highlight-tech">SQL, Python, Power BI, Tableau, AWS, and Azure</span> to transform raw data into <span className="highlight-insights">actionable insights</span>.
                            <br /><br />
                            I strongly believe in <span className="highlight-primary">continuous learning</span> and constantly push myself to <span className="highlight-secondary">expand my knowledge and skills</span>. Whether it’s tackling a challenging project or learning from real-world scenarios, I embrace every opportunity for growth.
                        </p>
                        <button className="btn" onClick={downloadResume}>
                            Download CV
                        </button>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <h3 className="skills__name">Technical Skills</h3>
                            <ul className="skills__list">
                                <li>Python & SQL</li>
                                <li>Data Pipeline Automation</li>
                                <li>Cloud Platforms (AWS, Azure)</li>
                                <li>Visualization Tools (Power BI, Tableau)</li>
                            </ul>
                        </div>

                        <div className="skills__data">
                            <h3 className="skills__name">Soft Skills</h3>
                            <ul className="skills__list">
                                <li>Problem Solving</li>
                                <li>Continuous Learning</li>
                                <li>Team Collaboration</li>
                                <li>Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
