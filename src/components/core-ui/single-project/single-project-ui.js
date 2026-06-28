import React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import './single-project.css';

function SingleProjectUI({ id, name, desc, tags, code, demo, theme, classes }) {
    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ 
                    backgroundColor: theme.quaternary,
                    borderColor: theme.quaternaryLight + '30'
                }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <p
                        className='project--desc'
                        style={{
                            color: theme.tertiary + 'cc',
                        }}
                    >
                        {desc}
                    </p>
                </div>

                <div className='project--lang'>
                    {tags.map((tag, id) => (
                        <span 
                            key={id}
                            style={{
                                color: theme.primary,
                                background: theme.primary + '12',
                                border: `1px solid ${theme.primary}20`
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className='project--showcaseBtn'>
                    {demo && (
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                    )}
                    {code && (
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                    )}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProjectUI;
