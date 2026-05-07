import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import LandingUI from '../core-ui/landing/landing-ui';

const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.secondary,
      backgroundColor: theme.primary,
      borderRadius: '999px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '148px',
      fontSize: '0.92rem',
      fontWeight: 600,
      height: '44px',
      fontFamily: 'var(--primaryFont)',
      border: `1px solid ${theme.primary}`,
      transition: '250ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.tertiary,
        border: `1px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        width: '148px',
      },
    },
    contactBtn: {
      backgroundColor: 'transparent',
      color: theme.tertiary,
      borderRadius: '999px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '148px',
      height: '44px',
      fontSize: '0.92rem',
      fontWeight: 600,
      fontFamily: 'var(--primaryFont)',
      border: `1px solid ${theme.buttonColor}`,
      transition: '250ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.tertiary,
        border: `1px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        display: 'inline-flex',
      },
    },
  }));

  const classes = useStyles();

  return (
    <LandingUI drawerOpen={drawerOpen} theme={theme} classes={classes} />
  );
};

export default Landing;