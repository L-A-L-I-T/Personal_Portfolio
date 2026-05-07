import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import NavbarUI from '../core-ui/navbar/navbar-ui';

const Navbar = () => {
  const { theme, setHandleDrawer, changeTheme, isDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: '2rem',
      color: theme.tertiary,
      cursor: 'pointer',
      transform: 'translateY(-4px)',
      transition: 'color 0.3s, transform 0.3s',
      '&:hover': {
        color: theme.primary,
        transform: 'translateY(-6px)',
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '1.9rem',
      },
      [t.breakpoints.up('md')]: {
        display: 'none',
      },
      [t.breakpoints.down('xs')]: {
        fontSize: '1.7rem',
      },
    },
    desktopLink: {
      color: theme.tertiary,
      fontFamily: 'var(--primaryFont)',
      fontSize: '0.88rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      opacity: 0.9,
      transition: 'color 0.2s ease',
      '&:hover': {
        color: theme.primary,
      },
    },
    desktopTheme: {
      width: '34px',
      height: '34px',
      borderRadius: '10px',
      border: `1px solid ${theme.buttonColor}`,
      backgroundColor: theme.quaternary,
      color: theme.tertiary,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        color: theme.primary,
        borderColor: theme.primary,
      },
    },
    MuiDrawer: {
      padding: '0.2rem 1.2rem',
      width: '15em',
      fontFamily: ' var(--primaryFont)',
      fontWeight: 500,
      fontSize: ' 18px',
      background: theme.secondary,
      overflow: 'hidden',
      borderTopRightRadius: '18px',
      borderBottomRightRadius: '18px',
      [t.breakpoints.down('sm')]: {
        width: '13.2em',
      },
    },
    closebtnIcon: {
      fontSize: '2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: theme.primary,
      position: 'absolute',
      right: 26,
      top: 24,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.tertiary,
      },
      [t.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: '1rem auto',
      borderRadius: '12px',
      background: theme.quaternary,
      color: theme.tertiary,
      width: '100%',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 14px',
      gap: '12px',
      boxSizing: 'border-box',
      border: `1px solid ${theme.buttonColor}`,
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      '&:hover': {
        background: `${theme.buttonColor}`,
        color: theme.primary,
        borderColor: theme.primary,
      },
      [t.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0 12px',
        height: '46px',
      },
    },
    drawerLinks: {
      fontFamily: 'var(--primaryFont)',
      width: 'auto',
      fontSize: '0.95rem',
      fontWeight: 600,
      [t.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
      },
    },
    drawerIcon: {
      fontSize: '1rem',
      [t.breakpoints.down('sm')]: {
        fontSize: '0.95rem',
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  };

  return (
    <NavbarUI
      theme={theme}
      shortname={shortname}
      classes={classes}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      open={open}
      changeTheme={changeTheme}
      isDark={isDark}
    />
  );
};

export default Navbar;