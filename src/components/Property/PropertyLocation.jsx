import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import SkeletonForMap from '../SkeletonForMap'

const containerStyle = {
    width: '100%',
    height: '60vh',
};


function PropertyLocation({ lat, lng }) {
    const position = {
        lat: + lat,
        lng: +lng
    }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyADpeUt7PnT9sDT6uFlY6Z_35ol_JGFyJs"
    })
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={16}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <>
                <Marker
                    position={position}
                />
            </>
        </GoogleMap>
    ) : <SkeletonForMap />
}
export default React.memo(PropertyLocation)