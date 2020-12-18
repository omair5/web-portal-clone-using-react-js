import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from './buy.module.css'

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiInput-underline:after": {
            borderBottomColor: "orange"
        }
    },
}));


const Buy = () => {
    const classes = useStyles();
    const [priceContainer, setpriceContainer] = useState(false);
    const [minimumValue, setminimumValue] = useState('0')
    const [maximumValue, setmaximumValue] = useState('10 crore')
    const [minbg, setminbg] = useState(0)
    const [maxbg, setmaxbg] = useState(0)


    const HandleMinimum = (e) => {
        setminimumValue(e.target.innerText)
        setminbg(parseInt(e.target.id))
    }

    const HandleMaximum = (e) => {
        setmaximumValue(e.target.innerText)
        setmaxbg(parseInt(e.target.id))

    }



    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                <Grid item xs={12} md={3} >
                    <Autocomplete
                        id="combo-box-demo1"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="City"
                            // FOR UNDERLINE STYLE
                            classes={classes}
                            // FOR INPUT STYLING
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                            // FOR LABEL STYLING
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                        />
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6} className={styles.locationSelect}>
                    <Autocomplete
                        id="combo-box-demo2"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Location"
                            // FOR UNDERLINE STYLE
                            classes={classes}
                            // FOR INPUT STYLING
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                            // FOR LABEL STYLING
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                        />
                        }
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    <Autocomplete
                        id="combo-box-demo3"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Property Type"
                            // FOR UNDERLINE STYLE
                            classes={classes}
                            // FOR INPUT STYLING
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                            // FOR LABEL STYLING
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                        />
                        }
                    />
                </Grid>
            </Grid>

            {/* THIS IS ROW 2 */}
            <Grid container className={styles.secondGrid}>
                <Grid item xs={12} md={3} >
                    <div className={styles.tab_slider} >
                        <div onClick={() => setpriceContainer(!priceContainer)}>
                            <div className={styles.mylabel}>
                                <p>Price Range (PKR)</p>
                            </div>
                            <div className={styles.priceRange}>
                                <p>{minimumValue}</p>
                                <p>to</p>
                                <p>{maximumValue}</p>
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                        {priceContainer &&
                            <div className={`${styles.priceBox} custom-scroll`}>
                                {/* MIN VALUES */}
                                <div className={styles.priceHeading}>
                                    <h5>MIN</h5>
                                    <div className={styles.priceValues} onClick={(e) => HandleMinimum(e)}>
                                        <p id={1} style={{ backgroundColor: minbg === 1 ? '#fcb812' : 'transparent' }}>30 lac</p>
                                        <p id={2} style={{ backgroundColor: minbg === 2 ? '#fcb812' : 'transparent' }}>40 lac</p>
                                        <p id={3} style={{ backgroundColor: minbg === 3 ? '#fcb812' : 'transparent' }}>50 lac</p>
                                        <p id={4} style={{ backgroundColor: minbg === 4 ? '#fcb812' : 'transparent' }}>60 lac</p>
                                        <p id={5} style={{ backgroundColor: minbg === 5 ? '#fcb812' : 'transparent' }}>70 lac</p>
                                        <p id={6} style={{ backgroundColor: minbg === 6 ? '#fcb812' : 'transparent' }}>80 lac</p>
                                        <p id={7} style={{ backgroundColor: minbg === 7 ? '#fcb812' : 'transparent' }}>90 lac</p>
                                    </div >
                                </div >
                                {/* MAX VALUES */}
                                <div div className={styles.priceHeading} >
                                    <h5>MAX</h5>
                                    <div className={styles.priceValues} onClick={(e) => HandleMaximum(e)}>
                                        <p id={1} style={{ backgroundColor: maxbg === 1 ? '#fcb812' : 'transparent' }}>5 crore</p>
                                        <p id={2} style={{ backgroundColor: maxbg === 2 ? '#fcb812' : 'transparent' }}>6 crore</p>
                                        <p id={3} style={{ backgroundColor: maxbg === 3 ? '#fcb812' : 'transparent' }}>7 crore</p>
                                        <p id={4} style={{ backgroundColor: maxbg === 4 ? '#fcb812' : 'transparent' }}>8 crore</p>
                                        <p id={5} style={{ backgroundColor: maxbg === 5 ? '#fcb812' : 'transparent' }}>9 crore</p>
                                        <p id={6} style={{ backgroundColor: maxbg === 6 ? '#fcb812' : 'transparent' }}>10 crore</p>
                                        <p id={7} style={{ backgroundColor: maxbg === 7 ? '#fcb812' : 'transparent' }}>11 crore</p>
                                        <p id={8} style={{ backgroundColor: maxbg === 8 ? '#fcb812' : 'transparent' }}>12 crore</p>
                                    </div>
                                </div >
                            </div >
                        }
                    </div >
                </Grid >

                {/* THIS IS ROW 2 */}

                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    <Autocomplete
                        id="combo-box-demo4"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Area Unit"
                            // FOR UNDERLINE STYLE
                            classes={classes}
                            // FOR INPUT STYLING
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                            // FOR LABEL STYLING
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                        />
                        }
                    />
                </Grid >
                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect}`} >
                    <Autocomplete
                        id="combo-box-demo5"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Beds"
                            // FOR UNDERLINE STYLE
                            classes={classes}
                            // FOR INPUT STYLING
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                            // FOR LABEL STYLING
                            InputLabelProps={{
                                ...params.InputLabelProps,
                                style: {
                                    color: "black",
                                    fontWeight: 'bold',
                                    fontSize: '15px',
                                }
                            }}
                        />
                        }
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    <div className={styles.searchButtonBox}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >
        </div >
    );
}

export default Buy;

























const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },

];