import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import ProjectsUI from '../core-ui/projects/projects-UI';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.secondary,
      backgroundColor: theme.primary,
      transition: 'color 0.5s',
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.buttonColor,
      }
    },
    viewArr: {
      color: theme.primary,
      backgroundColor: theme.secondary,
      width: '32px',
      height: '32px',
      padding: '0.45rem',
      fontSize: '0.95rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.5s',
      "&:hover": {
        color: theme.buttonColor,
        backgroundColor: theme.secondary,
      }
    },
  }));

  const classes = useStyles();

  return (
    <ProjectsUI
      theme={theme}
      classes={classes}
    />
  );
};

export default Projects;