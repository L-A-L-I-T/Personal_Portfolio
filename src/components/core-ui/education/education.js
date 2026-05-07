import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { educationData } from '../../../data/educationData';
import './education.css';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="education" id="resume">
                <div className="education-header">
                    <p style={{ color: theme.primary }}>Journey</p>
                    <h1 style={{ color: theme.tertiary }}>Education Timeline</h1>
                </div>
                <div className="education-body">
                    {educationData.map((edu) => (
                        <article key={edu.id} className="education-card" style={{ backgroundColor: theme.quaternary }}>
                            <div className="education-period" style={{ color: theme.primary }}>
                                {edu.startYear} - {edu.endYear}
                            </div>
                            <h3 style={{ color: theme.tertiary }}>{edu.course}</h3>
                            <p style={{ color: theme.tertiary }}>{edu.institution}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Education
