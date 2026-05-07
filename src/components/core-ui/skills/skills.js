import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import { skillsData } from '../../../data/skillsData';
import { getSkillIcon } from '../../../utils/skillsIcon';
import './skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <p style={{ color: theme.primary }}>Core Skills</p>
                <h2 style={{ color: theme.tertiary }}>Tech stack I use to build products</h2>
            </div>
            <div className="skillsContainer">
                {skillsData.map((skill, id) => {
                    const SkillIcon = getSkillIcon(skill);
                    return (
                        <div className="skill--box" key={id} style={{ backgroundColor: theme.quaternary }}>
                            <SkillIcon className="skill-icon" style={{ color: theme.primary }} aria-label={skill} />
                            <h3 style={{ color: theme.tertiary }}>
                                {skill}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills
