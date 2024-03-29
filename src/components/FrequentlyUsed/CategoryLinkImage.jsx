import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    MainContainer: {
        cursor: 'pointer',
        overflow: 'hidden',
        margin: '15px 0px',
        borderRadius: '5px',
        "&:hover": {
            "& $overlay": {
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
            "& $myImage": {
                transform: 'scale(1.02)',
            }
        }
    },
    myImage: {
        transition: 'all 0.3s ease',

    },
    CategoryChilds: {
        width: '100%',
        height: '140px',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
    },
    content: {
        position: 'absolute',
        bottom: 0,
        marginLeft: '10px',
        "& p": {
            padding: '5px 0px',
            fontSize: '12px',
            fontWeight: 'bolder'
        },
    }
}));

const CategoryLinkImage = ({ image, alt, description, totalListings }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.MainContainer}>
                <div className={classes.CategoryChilds}>
                    <img src={image} alt={alt} height='100%' width='100%' className={classes.myImage} />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h5>{description}</h5>
                            <p>{totalListings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(CategoryLinkImage);