import React from 'react';
import CategoryImage from './images/category.jpeg'
import CategoryLinkImage from '../../FrequentlyUsed/CategoryLinkImage';

const DeveloperCategories = () => {
    return (
        <>
            <CategoryLinkImage
                image={CategoryImage}
                alt={"CategoryImage"}
                description='Commercial'
                totalListings='5,151 listings'
            />
            <CategoryLinkImage
                image={CategoryImage}
                alt={"CategoryImage"}
                description='Commercial'
                totalListings='5,151 listings'
            />
            <CategoryLinkImage
                image={CategoryImage}
                alt={"CategoryImage"}
                description='Commercial'
                totalListings='5,151 listings'
            />
            <CategoryLinkImage
                image={CategoryImage}
                alt={"CategoryImage"}
                description='Commercial'
                totalListings='5,151 listings'
            />
            <CategoryLinkImage
                image={CategoryImage}
                alt={"CategoryImage"}
                description='Commercial'
                totalListings='5,151 listings'
            />
        </>
    );
}

export default React.memo(DeveloperCategories);