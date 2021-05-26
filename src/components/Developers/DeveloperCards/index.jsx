import React from 'react';
import Grid from '@material-ui/core/Grid';
import propertyImage from './images/property.jpeg'
import DeveloperCard from '../../FrequentlyUsed/DeveloperAndAgentCard';
const DeveloperCards = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <DeveloperCard
                        bgImage={propertyImage}
                        DeveloperLogo={propertyImage}
                        DeveloperName='Alrauf Builders & Developers'
                        Address='Malir, Karachi, Pakistan'
                        PhoneNumber='0342 1113600'
                        MainBox={{ maxWidth: '95%' }}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default React.memo(DeveloperCards);