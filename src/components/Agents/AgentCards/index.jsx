import React from 'react';
import Grid from '@material-ui/core/Grid';
import propertyImage from './images/property.jpeg'
import AgentCard from '../../FrequentlyUsed/DeveloperAndAgentCard';
const AgentCards = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <AgentCard
                        bgImage={propertyImage}
                        DeveloperLogo={propertyImage}
                        DeveloperName='Alrauf Group'
                        Address='Shahrah-e-Faisal Road, Karachi, Pakistan'
                        PhoneNumber='0342 1113600'
                        MainBox={{ maxWidth: '95%' }}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default React.memo(AgentCards);