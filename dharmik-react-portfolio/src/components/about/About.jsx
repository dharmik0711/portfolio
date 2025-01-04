import React from 'react';
import './About.css';
import Image from '../../assets/memoji.webp';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi, I’m Dharmik Patel
I’m based in Ontario, where I’m crafting the future of data engineering and analytics.

I am a self-driven, career-oriented data enthusiast specializing in big data technologies, cloud computing, and data pipeline automation. Currently, I am pursuing a diploma in Computer Systems Technology – Software Development and Network Engineering at Sheridan College, where I have achieved a GPA of 3.58/4. My expertise lies in designing and implementing data workflows, from ETL processes to data warehousing and visualization. I work with technologies like SQL, Python, Power BI, Tableau, AWS, and Azure to transform raw data into actionable insights.

I strongly believe in continuous learning and constantly push myself to expand my knowledge and skills. Whether it’s tackling a challenging project or learning from real-world scenarios, I embrace every opportunity for growth. </p>
                        <ul className="about__list">
                            <li>JavaScript </li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>Html & Css</li>
                            <li>Cloud & Database</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML & CSS</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">PYTHON</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CRICKET</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About