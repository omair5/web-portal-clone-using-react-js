import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Default from '../FrequentlyUsed/default.jpg'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '520px',

        [theme.breakpoints.only('md')]: {
            height: '420px',

        },
        [theme.breakpoints.down('sm')]: {
            height: '320px',

        },
    }
}));

const BlogTitleImage = ({ blog_image }) => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <img src={blog_image ? blog_image : Default} alt="blog cover show" height={'100%'} width={'100%'} />
        </div>
    );
}
export default React.memo(BlogTitleImage);