import { makeStyles } from '@mui/styles';
import React from 'react';
import SingleProjectUI from '../core-ui/single-project/single-project-ui';

const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 50,
      border: `1px solid ${theme.buttonColor}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.primary,
        transform: 'translateY(-2px)',
        border: `1px solid ${theme.primary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
      '&:hover': {},
    },
  }));

  const classes = useStyles();

  return (
    <SingleProjectUI
      classes={classes}
      id={id}
      name={name}
      desc={desc}
      tags={tags}
      code={code}
      demo={demo}
      image={image}
      theme={theme}
    />
  );
};

export default SingleProject;