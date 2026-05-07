import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import BlogPageUI from '../../components/core-ui/blog-page/blog-page-ui';
import { ThemeContext } from '../../contexts/theme-context';
import UseBlog from '../../hooks/useBlog';

function BlogPage() {
    const { blogs } = UseBlog()
    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogs?.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: 'min(520px, 90%)',
            height: '2.8rem',
            outline: 'none',
            border: `1px solid ${theme.buttonColor}`,
            borderRadius: '12px',
            padding: '0.9rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.quaternary,
            "&::placeholder": {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: { width: '100%' },
        },
        home: {
            color: theme.tertiary,
            position: 'absolute',
            top: 24,
            left: 24,
            padding: '8px',
            borderRadius: '12px',
            boxSizing: 'content-box',
            fontSize: '1.5rem',
            cursor: 'pointer',
            backgroundColor: theme.quaternary,
            border: `1px solid ${theme.buttonColor}`,
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.primary,
                transform: 'translateY(-2px)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.35rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <BlogPageUI
            theme={theme}
            classes={classes}
            filteredArticles={filteredArticles}
            setSearch={setSearch}
            search={search}
        />
    )
}

export default BlogPage
