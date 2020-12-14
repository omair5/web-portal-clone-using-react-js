import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import AbaadeeButton from '../../FrequentlyUsed/Button';

// FOR ROOT
const useStylesBase = makeStyles(theme => ({
    root: {
        "& .MuiInput-underline:after": {
            borderBottomColor: "orange"
        },
    },
}));
// FOR GENERAL
const useStyles = makeStyles(theme => ({
    forAutoComplete: {
        width: '100%',
        height: '60px',
        margin: '7px 0px',
    },
    forTextField: {
        height: '100%',
    },
    PriceSlider: {
        width: '100%',
        height: '50px',
        margin: '5px 0px',
        '& p': {
            fontSize: '15px',
            fontWeight: 'bolder'
        }
    }
}));
// FOR SLIDER
function valuetext(value) {
    return `${value}°C`;
}

const ExploreSearchs = () => {
    const classes = useStyles();
    const classesBase = useStylesBase();

    // FOR SLIDER
    const [value, setValue] = React.useState([0, 18000000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.MainContainer}>
            {/*LOCATION  */}
            <Autocomplete
                id="combo-box-demo1"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="Location"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
                    // FOR INPUT STYLING
                    InputProps={{
                        ...params.InputProps,
                        style: {
                            color: "black",
                            fontWeight: 'bolder',
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
            {/* CITY */}
            <Autocomplete
                id="combo-box-demo2"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="City"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
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
            {/* PROPERTY TYPE */}
            <Autocomplete
                id="combo-box-demo3"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="Property Type"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
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
            {/* Area Unit */}
            <Autocomplete
                id="combo-box-demo4"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="Area Unit"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
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
            {/* BEDS */}
            <Autocomplete
                id="combo-box-demo5"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="Beds"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
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
            {/* TOTAL ROOMS */}
            <Autocomplete
                id="combo-box-demo6"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                renderInput={(params) => <TextField {...params} label="Total Rooms"
                    className={classes.forTextField}
                    // FOR UNDERLINE STYLE
                    classes={classesBase}
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
            {/* RANGE SLIDER */}
            <div >
                <div className={classes.PriceSlider} >
                    <p>Price Range</p>
                    <p>PKR <span className='yellow'>{value[0]}</span> — PKR <span className='yellow'>{value[1]}</span></p>
                </div>
                <Slider
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={0}
                    step={1000}
                    max={18000000}
                    style={{ color: 'rgb(252, 184, 22)' }}
                />
            </div>
            {/* SEARCH BUTTON  */}
            <AbaadeeButton
                innerContent={'SEARCH'}
                buttonIcon={<SearchIcon style={{ fontSize: '25px' }} />}
            />
        </div >
    );
}

export default React.memo(ExploreSearchs);

























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
]