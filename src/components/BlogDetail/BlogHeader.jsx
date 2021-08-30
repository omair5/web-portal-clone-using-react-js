import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ClassIcon from '@material-ui/icons/Class';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto',
        "& h1": {
            textTransform: 'capitalize',
            textAlign: 'center',
            fontSize: '4rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '3.2rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
        }
    },
    childContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& h4": {
            textTransform: 'capitalize',
            color: 'rgb(83, 90, 89)'
        }
    },
    iconStyle: {
        margin: '15px'
    },
    icon: {
        fontSize: '25px',
        color: 'rgb(252, 184, 22)',
        paddingRight: '5px'
    }
}));

const BlogHeader = ({ blog_title, blog_category, blog_date }) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <h1>{blog_title}</h1>
            <Container maxWidth="sm" className={classes.childContainer} >
                <div className={`${classes.childContainer} ${classes.iconStyle}`}>
                    <ClassIcon className={classes.icon} />
                    <h4>{blog_category}</h4>
                </div>

                <div className={classes.childContainer}>
                    <CalendarTodayIcon className={classes.icon} />
                    <h4>{blog_date}</h4>
                </div>
            </Container>
        </div>
    );
}
export default React.memo(BlogHeader);