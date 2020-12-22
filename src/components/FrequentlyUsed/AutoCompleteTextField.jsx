import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";


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
    },
    forTextField: {
        height: '100%',
    }
}));

const AutoCompleteTextField = ({ id, label,style }) => {
    const classes = useStyles();
    const classesBase = useStylesBase();
    return (
        <>
            <Autocomplete
                id={id}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                className={classes.forAutoComplete}
                style={style}
                renderInput={(params) => <TextField {...params} label={label}
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
        </>
    );
}

export default React.memo(AutoCompleteTextField);


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