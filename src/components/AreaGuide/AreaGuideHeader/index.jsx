import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import styles from './areaguide.module.css'


export const useStyles = makeStyles((theme) => ({
    SearchContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },
    MainContainer: {
        backgroundColor: 'rgba(0, 0, 0,0.4)',
        borderRadius: '5px',
        padding: '20px',
        minWidth: '70%',
        "& h1": {
            fontSize: '55px',
            color: 'white',
            textAlign: "center"
        }
    },
    AreaGuideButton: {
        backgroundColor: '#fcb812',
        border: 'none',
        outline: 'none',
        padding: '20px 30px',
        marginLeft: '10px',
        marginTop: '5px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'white',
        fontWeight:'bolder'
    }
}));
export const useBaseStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: '#fcb812',
            borderWidth: '3px'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: '#fcb812',
            borderWidth: '3px'
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: '#fcb812',
            borderWidth: '3px'
        },
        "& .MuiAutocomplete-clearIndicator": {
            color: 'white'
        },
        "& .MuiSvgIcon-root": {
            color: 'white'

        }
    },
}));


const AreaGuideHeader = () => {
    const classes = useStyles();
    const BaseClass = useBaseStyles()

    return (
        <>
            <div className={styles.backgroundImg}>
                <div className={classes.MainContainer}>
                    <h1>Discover Pakistan!</h1>
                    <div className={classes.SearchContainer}>
                        <Autocomplete
                            id="highlights-demo"
                            style={{ width: 600 }}
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params} label="LOCATION" variant="outlined" margin="normal"
                                    classes={BaseClass}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: {
                                            color: "white",
                                            fontWeight: 'bolder',
                                            fontSize: '15px',
                                        }
                                    }}
                                    InputLabelProps={{
                                        ...params.InputLabelProps,
                                        style: {
                                            color: "white",
                                            fontWeight: 'bolder',
                                            fontSize: '15px',
                                        }
                                    }} />
                            )}
                            renderOption={(option, { inputValue }) => {
                                const matches = match(option.title, inputValue);
                                const parts = parse(option.title, matches);
                                return (
                                    <div>
                                        {parts.map((part, index) => (
                                            <span key={index} style={{ fontWeight: part.highlight ? 1000 : 400 }}>
                                                {part.text}
                                            </span>
                                        ))}
                                    </div>
                                );
                            }}
                        />
                        <button className={classes.AreaGuideButton}>SEARCH</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(AreaGuideHeader);


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
];