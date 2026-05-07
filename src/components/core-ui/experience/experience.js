import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { experienceData } from '../../../data/experienceData';
import './experience.css';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="experience" id="experience">
                <div className="experience-header">
                    <p style={{ color: theme.primary }}>Career</p>
                    <h1 style={{ color: theme.tertiary }}>Professional Experience</h1>
                </div>
                <div className="experience-body">
                    {experienceData.map((exp) => (
                        <article key={exp.id} className="experience-card" style={{ backgroundColor: theme.quaternary }}>
                            <div className="experience-period" style={{ color: theme.primary }}>
                                {exp.startYear} - {exp.endYear}
                            </div>
                            <h3 style={{ color: theme.tertiary }}>{exp.jobtitle}</h3>
                            <p style={{ color: theme.tertiary }}>{exp.company}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Experience
