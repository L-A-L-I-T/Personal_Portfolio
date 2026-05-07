import { Container } from '@mui/material';
import React, { useContext } from 'react';
import codings from '../../../assets/lottie/coding.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import AnimationLottie from '../../helper/animation-lottie';
import './about.css';

function About() {
    const focusAreas = [
        "Scalable backend architecture",
        "Modern React UI engineering",
        "API design and integration",
        "Performance optimization",
    ];

    const quickFacts = [
        { label: "Location", value: "India" },
        { label: "Primary Stack", value: "Node.js + React" },
        { label: "Interests", value: "System Design, DSA, AI" },
    ];

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <p className="section-label" style={{ color: theme.primary }}>About</p>
                <div className="about-body">
                    <div className="about-lead" style={{ backgroundColor: theme.quaternary }}>
                        <h2 style={{ color: theme.tertiary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutData.description1}</p>
                        <p style={{ color: theme.tertiary }}>{aboutData.description2}</p>

                        <div className="about-facts">
                            {quickFacts.map((fact) => (
                                <div key={fact.label} className="fact-card">
                                    <span style={{ color: theme.primary }}>{fact.label}</span>
                                    <strong style={{ color: theme.tertiary }}>{fact.value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-focus" style={{ backgroundColor: theme.quaternary }}>
                        <h3 style={{ color: theme.tertiary }}>What I focus on</h3>
                        <div className="focus-list">
                            {focusAreas.map((item) => (
                                <div key={item} className="focus-chip" style={{ color: theme.tertiary }}>
                                    <span style={{ backgroundColor: theme.primary }} />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="about-note">
                            <p style={{ color: theme.tertiary }}>
                                I enjoy building reliable digital products from concept to deployment,
                                with emphasis on clean UX and maintainable architecture.
                            </p>
                        </div>
                    </div>
                    <div className="about-animation" style={{ backgroundColor: theme.quaternary }}>
                        <div className="animation-wrap">
                            <AnimationLottie animationPath={codings} />
                        </div>
                        <div className="animation-caption">
                            <span style={{ color: theme.primary }}>Always learning</span>
                            <p style={{ color: theme.tertiary }}>
                                Constantly experimenting with new tools and patterns to ship better software.
                            </p>
                        </div>
                    </div>
                    <div className="about-highlights" style={{ backgroundColor: theme.quaternary }}>
                        <h3 style={{ color: theme.tertiary }}>How I work</h3>
                        {[
                            "Clean architecture and maintainable code",
                            "Product-first mindset with business impact",
                            "Clear communication and collaborative execution",
                        ].map((item) => (
                            <div key={item} className="highlight-item">
                                <span style={{ backgroundColor: theme.primary }} />
                                <p style={{ color: theme.tertiary }}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
