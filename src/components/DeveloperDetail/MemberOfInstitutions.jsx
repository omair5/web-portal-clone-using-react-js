import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    images: {
        height: '120px',
        width: '120px',
        margin: '0px 10px'
    }
});

const MemberOfInstitutions = ({ membersList }) => {
    const classes = useStyles();
    return (
        <>
            <ul>
                {
                    membersList.map(value => (
                        <img key={uuidv4()} src={value.member_list_logo} alt="member logo" className={classes.images} />

                    ))
                }
            </ul>
        </>
    );
}

export default MemberOfInstitutions;