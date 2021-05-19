import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux'
import SkeletonForMap from '../../SkeletonForMap';

const containerStyle = {
    width: '100%',
    height: '40vh',
};

const position = {
    lat: 24.871641,
    lng: 67.059906
}

const onDrageEnd = e => {
    console.log('drag end here: ', e.latLng.lat(), e.latLng.lng())
}


function GoogleMapForLocation() {
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
                    onDragEnd={onDrageEnd}
                    position={position}
                    draggable={true}
                />
            </>
        </GoogleMap>
    ) : <SkeletonForMap />
}
export default React.memo(GoogleMapForLocation)