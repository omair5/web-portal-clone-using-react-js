import React from 'react';
import Rating from '@material-ui/lab/Rating';

function Ratings() {
    const [value, setValue] = React.useState(2);
    return (
        <>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                size="large"
                style={{ flexBasis: '50%'}}
            />
        </>
    );
}
export default React.memo(Ratings)