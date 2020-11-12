import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './newprojects.module.css'
import propertyImage from './images/property.jpeg'

const useStyles = makeStyles({
    root: {
        maxWidth: 370,
        margin: 'auto',
    },
    media: {
        height: 230,
        position: 'relative'
    },
    card: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        color: 'white',
        backgroundColor: 'Black',
        opacity: 0.5,
        width: '100%',
        height: '74%'
    },
    mainContainer: {
        position: 'absolute',
        top: '20px',
        left: '20px'

    },
    featured: {
        border: '1px solid rgb(252, 184, 22)',
        padding: '1rem',
        marginRight:'0.5rem'
    },
    price: {
        border: '1px solid white',
        padding: '1rem'
    }
});

const NewProjects = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' className={styles.cardMainBox}>
            <h1 className={styles.marginBottom}>DISCOVER NEW PROJECTS</h1>

            <Grid container spacing={2}>

                {/* CARD 1 */}
                <Grid item xs={12} md={4} className={styles.c1} >

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propertyImage}
                                title="Contemplative Reptile"
                            />
                            <div className={classes.overlay}>
                                <div className={classes.mainContainer}>
                                    <span className={classes.featured}>FEATURED</span>
                                    <span className={classes.price}>PKR 26,000,000</span>
                                </div>
                            </div>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
        </Button>
                            <Button size="small" color="primary">
                                Learn More
        </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* CARD 2 */}
                {/* <Grid item xs={12} md={4} className={styles.c2} >
                    <h3>Houses</h3>
                </Grid> */}

                {/* CARD 3 */}
                {/* <Grid item xs={12} md={4} className={styles.c3}>
                    <h3>Houses</h3>
                </Grid> */}

            </Grid>
        </Container>);

}

export default NewProjects;