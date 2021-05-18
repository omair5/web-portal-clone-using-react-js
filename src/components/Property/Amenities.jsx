import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
// import { ToWords } from 'to-words';
// import wordsToNumbers from 'words-to-numbers';

const useStyles = makeStyles({
    tickBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& p": {
            marginLeft: '5px',
            textTransform: 'capitalize'
        }
    },
    tickColor: {
        color: '#fcb812'
    }
});

const Amenities = () => {
    const classes = useStyles();
    // let calculatedPrice = ''
    // const toWords = new ToWords();
    // let words = toWords.convert(42303, { currency: true, ignoreDecimal: true, ignoreZeroCurrency: true });
    // console.log(words)
    // // console.log(wordsToNumbers(words));
    // const splitted_words = words.split(' ')
    // console.log(splitted_words)
    // for (var x of splitted_words) {
    //     if ((x !== 'Thousand') && (x !== 'Crore') && (x !== 'Lakh')) {
    //         console.log('this is from if', x)
    //         const to_number = wordsToNumbers(x)
    //         calculatedPrice = calculatedPrice + to_number
    //     }
    //     else {
    //         // if (x !== 'Rupees ' || 'Only')
    //         calculatedPrice = calculatedPrice + x
    //         // else {
    //         // console.log(x)
    //         // }
    //     }
    // }
    // console.log(calculatedPrice)


    return (
        <>
            <Container maxWidth="md" style={{ backgroundColor: 'green', padding: '0px' }}>
                <h4>GENERAL INFORMATION</h4>
                <Grid container spacing={3}>
                    <Grid container item xs={12} sm={6} lg={4}  >
                        <div className={classes.tickBox}>
                            <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                            <p> Built In Year</p>
                        </div>
                    </Grid>

                    <Grid container item xs={12} sm={6} lg={4} >
                        <div className={classes.tickBox}>
                            <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                            <p> No Of Bedrooms</p>
                        </div>
                    </Grid>

                    <Grid container item xs={12} sm={6} lg={4} >
                        <div className={classes.tickBox}>
                            <CheckCircleOutlineRoundedIcon className={classes.tickColor} />
                            <p> No Of Bathrooms</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(Amenities);