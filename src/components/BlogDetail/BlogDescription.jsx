import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import parser from 'html-react-parser';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px 0px'
    }
}));

const BlogDescription = ({ blog_description }) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            {parser(blog_description)}
        </div>
    );
}
export default React.memo(BlogDescription);