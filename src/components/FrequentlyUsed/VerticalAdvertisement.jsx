import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Default from './default.jpg'
import { v4 as uuidv4 } from 'uuid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(() => ({
    mainContainer: {
        margin: '20px auto',
        width: '100%'
    },
    childContainer: {
        margin: '0px auto 15px',
    },
    links: {
        textDecoration: 'none',
        outline: 'none',
        margin: 'none'
    }
}));

const VerticalAdvertisement = ({ advertisements }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                {advertisements.length === 0 ?
                    <div>
                        <Paper className={classes.childContainer}>
                            <img src={Default} alt={'placeholder'} width={'100%'} height={'140px'} />
                        </Paper>
                        <Paper className={classes.childContainer}>
                            <img src={Default} alt={'placeholder'} width={'100%'} height={'140px'} />
                        </Paper>
                    </div>

                    :

                    advertisements.map(value => (
                        <Paper className={classes.childContainer} key={uuidv4()}>
                            <a href={value.company_link} target='_blank' rel="noreferrer" className={classes.links}>
                                <img src={value.advertisement_img} alt={value.company_name} width={'100%'} height={'140px'} className={classes.links} />
                            </a>
                        </Paper>
                    ))

                }
            </div>
        </>
    );
}
export default React.memo(VerticalAdvertisement);