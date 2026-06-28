import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { FiServer, FiLayout, FiGitBranch, FiZap } from 'react-icons/fi';
import codings from '../../../assets/lottie/coding.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import AnimationLottie from '../../helper/animation-lottie';
import './about.css';

function About() {
    const focusAreas = [
        { text: "Scalable System Design", icon: <FiServer size={18} /> },
        { text: "Modern React UI engineering", icon: <FiLayout size={18} /> },
        { text: "API design and integration", icon: <FiGitBranch size={18} /> },
        { text: "Performance optimization", icon: <FiZap size={18} /> },
    ];

    const workPrinciples = [
        {
            num: "01",
            title: "Clean Architecture",
            desc: "Prioritizing maintainable code and scalable system design."
        },
        {
            num: "02",
            title: "Product-First Mindset",
            desc: "Focusing on building features that drive actual business impact."
        },
        {
            num: "03",
            title: "Collaboration",
            desc: "Clear communication, clear documentation, and aligned execution."
        }
    ];

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <p className="section-label" style={{ color: theme.primary }}>About Me</p>
                <div className="about-body">
                    {/* Bio Card */}
                    <div className="about-card about-lead" style={{ backgroundColor: theme.quaternary, borderColor: theme.quaternaryLight + '20' }}>
                        <h2 style={{ color: theme.tertiary }}>{aboutData.title}</h2>
                        <div className="about-bio">
                            <p style={{ color: theme.tertiary }}>{aboutData.description1}</p>
                            <p style={{ color: theme.tertiary }}>{aboutData.description2}</p>
                        </div>
                    </div>

                    {/* Focus Areas Card */}
                    <div className="about-card about-focus" style={{ backgroundColor: theme.quaternary, borderColor: theme.quaternaryLight + '20' }}>
                        <h3 style={{ color: theme.tertiary }}>Core Focus Areas</h3>
                        <div className="focus-list">
                            {focusAreas.map((item, idx) => (
                                <div key={idx} className="focus-chip" style={{ color: theme.tertiary }}>
                                    <div className="chip-icon" style={{ color: theme.primary, backgroundColor: theme.primary + '15' }}>
                                        {item.icon}
                                    </div>
                                    <span className="chip-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animation Card */}
                    <div className="about-card about-animation" style={{ backgroundColor: theme.quaternary, borderColor: theme.quaternaryLight + '20' }}>
                        <div className="animation-wrap">
                            <AnimationLottie animationPath={codings} />
                        </div>
                        <div className="animation-caption">
                            <span style={{ color: theme.primary }}>Always Learning</span>
                            <p style={{ color: theme.tertiary }}>
                                Experimenting with new patterns and technologies to engineer robust solutions.
                            </p>
                        </div>
                    </div>

                    {/* Work Principles Card */}
                    <div className="about-card about-highlights" style={{ backgroundColor: theme.quaternary, borderColor: theme.quaternaryLight + '20' }}>
                        <h3 style={{ color: theme.tertiary }}>Execution Philosophy</h3>
                        <div className="principles-list">
                            {workPrinciples.map((item, idx) => (
                                <div key={idx} className="principle-item">
                                    <div className="principle-num" style={{ color: theme.primary, backgroundColor: theme.primary + '15' }}>
                                        {item.num}
                                    </div>
                                    <div className="principle-content">
                                        <h4 style={{ color: theme.tertiary }}>{item.title}</h4>
                                        <p style={{ color: theme.tertiary + 'b3' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
