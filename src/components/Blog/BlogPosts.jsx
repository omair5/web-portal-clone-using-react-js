import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ClassIcon from '@material-ui/icons/Class';
import Default from '../../components/FrequentlyUsed/default.jpg'
import parser from 'html-react-parser';


const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 'auto',
        maxWidth: 385,
        margin: 'auto',
        border: '1px solid rgb(212, 212, 212)',
        [theme.breakpoints.down('md')]: {
            maxWidth: 500,
            height: 'auto',
        }
    },
    blogImageBox: {
        width: '100%',
        height: '20rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
            "& $blogImage": {
                transform: 'scale(1.1)',
                transition: 'all 0.7s ease',
            },
            "& $overlay": {
                opacity: 0.6
            }
        }
    },
    blogImage: {
        transition: 'all 0.7s ease',
    },
    content: {
        padding: '1rem',
        color: 'black',
        "& h5": {
            padding: '5px 0',
            fontSize: '15px',
            textTransform: 'capitalize'
        },
        "& div": {
            textAlign: 'center',
        }
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        opacity: 0.4,
        transition: 'all 0.3s ease',
        "& h5": {
            textAlign: 'left',
            "& span": {
                fontSize: "17px",
                color: "white",
                display: 'inline-block',
                border: '1px solid white',
                padding: '5px',
                margin: '7px',
                textTransform: 'uppercase',
                zIndex: 50
            }
        }
    },
    blogFooter: {
        display: 'flex',
        marginTop: '2rem',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '0.8rem',
        },

    },
    categoryIcon: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px'
        },
    },
    ReadMore: {
        backgroundColor: ' rgb(252, 184, 22)',
        marginLeft: 'auto',
        padding: '1rem',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            fontSize: '10px',
            padding: '0.9rem',
            margin: '0 auto',

        },
        '&:hover': {
            color: 'white'
        }
    }
}));

const BlogPosts = ({ BlogImage, BlogType, BlogDate, BlogTitle, BlogShortDescription }) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.blogImageBox}>
                    <img src={BlogImage ? BlogImage : Default} alt="blog cover" className={classes.blogImage} width='100%' height='100%' />
                    <div className={classes.overlay}>
                        <h5 ><span>{BlogDate}</span></h5>
                    </div>
                </div>
                <div className={classes.content}>
                    <h5>{BlogTitle}</h5>
                    <div>
                        {!!BlogShortDescription && parser(BlogShortDescription)}
                    </div>
                </div>
                <div className={classes.blogFooter}>
                    <p className={classes.categoryIcon}> <ClassIcon style={{ fontSize: '25px', color: 'rgb(252, 184, 22)' }} />{BlogType}</p>
                    <button className={classes.ReadMore}>READ MORE</button>
                </div>
            </Paper>
        </>
    );
}

export default React.memo(BlogPosts);