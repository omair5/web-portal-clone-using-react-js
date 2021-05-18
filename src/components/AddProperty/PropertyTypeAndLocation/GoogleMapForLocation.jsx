import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height:'40vh',
    margin: 'auto'
};

const center = {
    lat: 30.3894007,
    lng: 69.3532207
};
const position = {
    lat: 24.871641,
    lng: 67.059906
}

const onDrageEnd = e => {
    console.log('drag end here: ', e.latLng.lat(), e.latLng.lng())
}

function GoogleMapForLocation() {
    console.log('map component is loading')
    return (
        // <LoadScript
        //     googleMapsApiKey="AIzaSyCUKmZE0IR_nCBSYsvtFR8ZTYDkLIYHymA"
        // >
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
        // </LoadScript>
    )
}

export default React.memo(GoogleMapForLocation)