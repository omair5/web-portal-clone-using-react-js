import { makeStyles } from "@material-ui/core/styles";

// STYLES
const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: 'rgb(59, 70, 86)',
        width: '100%',
        padding: '20px 0px'
    },
    sectionDiv: {
        width: '85%',
        margin: '15px auto',
        textAlign: 'justify',
        '& h1': {
            textAlign: 'center',
            padding: '15px 0px',
            color: '#fcb812'
        },
        '& p': {
            color: 'whiteSmoke'
        }

    }
}));


const AboutSection = () => {
    // LOGIC
    const classes = useStyles();

    // USER INTERFACE 
    return (
        <>
            <div className={classes.header}>
                <div className={classes.sectionDiv}>
                    <h1>ABOUT US</h1>
                    <p>Changing the way, we look at real estate Abaadee.com brings you the simplest way of buying and selling property. As residential areas keep moving away from the center of the cities, there is an imminent need for people to find the best property for them.
                    In order to do that we offer our services and expertise which will help you analyze all that is on the table. Abaadee.com keeps track of the latest trends in real estate and how each development project moves forward. We keep a keen eye on the market in
                    order to access the possible value of the land that you are going to own. We believe in providing the best deals each and every time, that is why our clients are the only publicity we need. Where other property portals skip out the most basic of details
                    that have an impact on your life. We keep track of each and every inch of land that we present to you. So that even a minor change is reported to the client. We are a group of professionals that have spent decades in the real estate market. Our basic services
                    are free for any individual to try but our paid services provide you with our complete expertise. That means we will not only showcase the properties to you. But also evaluate their worth and facilities in order to match better to your expectations. We provide
                    our services for buying, selling, leasing, and renting properties. Our experts ensure each property gets its fair value and also each dimension is to the mark. More than often property portals make mistakes by not including a wide criterion for assembly.
                    Hence many properties jumble into one sport making it difficult to find the right one. Therefore, we have an elaborate category section that will continue to update in order to compensate for the client’s asset. We believe a property sells quicker if it
                    is in the right place, so we will give you the best place that we have. As for the seller, our advanced search option will help them find the closest match to their dream location. Our Mission is to bring things into a proper balance so that both the buyer
                    and seller can benefit. Everyone deserves to live in their dream home and if we can help you in finding that home we will do so gladly. We are focused and committed to our cause and utilize the best practices in the market to ensure a greater service.
                     </p>
                </div>
                <div className={classes.sectionDiv}>
                    <h1>OUR MISSION</h1>
                    <p>Our mission is to bring the buyer and seller together in a comfortable and cooperative environment. We provide you the platform where you can find all the great properties in Pakistan. at an affordable price. Our modern system allows users to see all the
                    details about the property they are interested in. Moreover, we help people in managing the intricacies of the buying process through our paid services. We understand the complex nature of buying and selling properties and we guarantee our platform will make
                    things much easier for the users. w are here to help you, so you won’t have to worry about buying property ever again.
                    </p>
                </div>
                <div className={classes.sectionDiv}>
                    <h1>OUR VISION</h1>
                    <p>We seek to digitize all the real estate markets in Pakistan in order for the people to access it easily. Where the world is making progress by leaps and bound in all fields. The field of real estate is still as same as centuries ago. We wish to bring change
                    to this orthodox mechanism and play our part in making it more modern and accessible. As people have less and less time to leave their houses let alone go on house hunting. We bring them a virtual tour of their desired properties so they can choose the few
                    worth visiting. We seek to save time and resources for both the buyers and sellers through or platform
                    </p>
                </div>
                <div className={classes.sectionDiv}>
                    <h1>OUR VALUES</h1>
                    <p>We value our users and their trust, that is why our platform allows for the maximum functionality possible. Moreover, we value an organized and user-friendly platform that helps people located the property they desire. In accordance with both these values,
                    we are working hard day and night to bring it to the material world. We are efficient, loyal, hardworking, and filled with the technical knowledge of this space. Hence we value the application of such knowledge for the benefit of our users and to ensure them
                    a pleasant journey. We have a dedicated team and as a company, we value them too and their efforts.
                    </p>
                </div>
                <div className={classes.sectionDiv}>
                    <h1>OUR PHILOSOPHY</h1>
                    <h3 style={{ textAlign: 'center', color: '#fcb812' }}>“Making ease for our fellow human beings in order for them to have a comfortable journey”.</h3>
                    <p>We know how taxing the hunt for a house can be and how much people have to suffer. In the hot summer days, people go from house to house looking for a place to call home. Nothing compares to the pressure of making the decision to buy a house.
                    This is going to be the place where your children and grandchildren will be born. This is where you will spend a greater part of your life. Therefore, in order to help you along your way, we present our services, which will help you choose
                    the best house for your family. We wish to make house hunting an easy journey for all our users.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutSection;