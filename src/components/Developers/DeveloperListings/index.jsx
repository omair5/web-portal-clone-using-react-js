import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SkeletonForDeveloperCard from '../../SkeletonForAgentCard';
import DeveloperCards from '../../FrequentlyUsed/DeveloperAndAgentCard';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        backgroundColor: 'rgb(245, 245, 245)',
        border: '2px solid rgb(230, 230, 230)',
        height: '600px',
        overflowY: 'scroll',
        overflowX: 'hidden',

    },
    ResultCount: {
        textAlign: 'center',
        marginTop: '10px',
        color: 'rgb(59, 70, 86)',
        "& span": {
            fontSize: '20px',
            fontWeight: 'bolder',
            letterSpacing: '1.1px',
        }
    },
    ForTopMargin: {
        marginTop: '15px'
    },
    removeDeco: {
        textDecoration: 'none'
    }
}));

const DeveloperListings = () => {
    const classes = useStyles();
    const listingsArray = useSelector(state => state.DeveloperList)
    console.log('developer listing', listingsArray)

    const generateSlug = (value) => {
        return value.toLowerCase().replace(/ /g, '-')
    }

    return (
        <>
            {/* this custom-scroll class is used from app.css */}
            <div className={`${classes.MainContainer} custom-scroll`}>
                {
                    listingsArray.length !== 0 &&
                    <div className={classes.ResultCount}>
                        <span>{listingsArray.length} RESULT FOUND</span>
                    </div>
                }

                {/* CARDS */}
                <Grid container spacing={3} className={classes.ForTopMargin}>
                    {
                        listingsArray.length === 0 ?
                            Array(5).fill().map(() => (
                                <Grid item xs={12} md={6} key={uuidv4()}>
                                    <SkeletonForDeveloperCard />
                                </Grid>
                            ))
                            :
                            listingsArray.map((value) => (
                                <Grid item xs={12} md={6} key={uuidv4()}>
                                    <Link to={`/developer/${generateSlug(value.name)}/${value.developer_id}`} className={classes.removeDeco}>
                                        < DeveloperCards
                                            image={value.image}
                                            name={value.name}
                                            address={value.address}
                                            PhoneNumber={value.p_number}
                                        />
                                    </Link>
                                </Grid>
                            ))
                    }
                </Grid>
            </div>
        </>
    );
}
export default React.memo(DeveloperListings);