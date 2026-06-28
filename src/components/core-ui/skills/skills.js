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
            
            <div className="skillsCategories">
                {Object.entries(skillsData).map(([category, skills], catId) => (
                    <div 
                        key={catId} 
                        className="skillsCategoryCard" 
                        style={{ 
                            backgroundColor: theme.quaternary,
                            borderColor: theme.quaternaryLight + '20'
                        }}
                    >
                        <h3 className="categoryTitle" style={{ color: theme.tertiary }}>
                            <span className="titleLine" style={{ backgroundColor: theme.primary }} />
                            {category}
                        </h3>
                        <div className="categorySkillsGrid">
                            {skills.map((skill, id) => {
                                const SkillIcon = getSkillIcon(skill);
                                return (
                                    <div key={id} className="skillPill">
                                        <div 
                                            className="skillPillIcon" 
                                            style={{ 
                                                color: theme.primary,
                                                backgroundColor: theme.primary + '12' 
                                            }}
                                        >
                                            <SkillIcon size={18} aria-label={skill} />
                                        </div>
                                        <span className="skillPillText" style={{ color: theme.tertiary }}>
                                            {skill}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
