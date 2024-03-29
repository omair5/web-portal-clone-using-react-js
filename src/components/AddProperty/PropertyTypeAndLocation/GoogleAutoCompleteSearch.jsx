// import React, { useState } from 'react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';


// const GoogleAutoCompleteSearch = () => {
//     const [address, setaddress] = useState('')

//     const handleChange = address => {
//         setaddress(address);
//     };

//     const onError = (status, clearSuggestions) => {
//         console.log('Google Maps API returned error with status: ', status)
//         clearSuggestions()
//     }


//     const handleSelect = address => {
//         geocodeByAddress(address)
//             .then(results => getLatLng(results[0]))
//             .then(latLng => console.log('Success', latLng))
//             .catch(error => console.error('Error', error));
//     };

//     return (
//         <PlacesAutocomplete
//             value={address}
//             onChange={handleChange}
//             onSelect={handleSelect}
//             onError={onError}
//             clearItemsOnError={true}
//         >
//             {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                 <div>
//                     <input
//                         {...getInputProps({
//                             placeholder: 'Search Places ...',
//                             className: 'location-search-input',
//                         })}
//                     />
//                     <div className="autocomplete-dropdown-container">
//                         {loading && <div>Loading...</div>}
//                         {suggestions.map(suggestion => {
//                             const className = suggestion.active
//                                 ? 'suggestion-item--active'
//                                 : 'suggestion-item';
//                             // inline style for demonstration purpose
//                             const style = suggestion.active
//                                 ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                             return (
//                                 <div
//                                     {...getSuggestionItemProps(suggestion, {
//                                         className,
//                                         style,
//                                     })}
//                                 >
//                                     <span>{suggestion.description}</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             )}
//         </PlacesAutocomplete>
//     );
// }
// export default React.memo(GoogleAutoCompleteSearch)


