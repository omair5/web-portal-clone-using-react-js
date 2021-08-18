let apiURL = 'http://localhost:3200/developer/project/'
const GetProjectData = async (project_id) => {
    console.log(project_id)
    const response = await fetch(`${apiURL}${parseInt(project_id)}`)
    const data = await response.json()
    console.log(data)
    return {
        approved_by: data.approved_by ? data.approved_by : null,
        completion_year: data.completion_year ? data.completion_year : null,
        project_description: data.description ? data.description : null,
        developer_name: data.developer.name,
        latitude: data.latitude,
        location: data.location.location_name,
        longitude: data.longitude,
        payment_method: data.payment_option ? data.payment_option : null,
        price: data.price,
        project_logo: data.project_logo_image,
        project_name: data.project_name,
        project_type: data.project_type ? data.project_type : null,
        project_area: data.total_area ? data.total_area : null,
        project_images: data.project_image.filter(value => value.image_type === 'pi_images').map(value => value.imageurl),
        floor_plan_images: data.project_image.filter(value => value.image_type === 'fp_images').map(value => value.imageurl),
        payment_plan_images: data.project_image.filter(value => value.image_type === 'pp_images').map(value => value.imageurl),

        main_features: data.project_aminities.filter(value => value.Category_name === 'Features').map(value => value.feature_name.replace(/_/g, ' ')),
        community_features: data.project_aminities.filter(value => value.Category_name === 'CommunityFeatures').map(value => value.feature_name.replace(/_/g, ' ')),
        utilities: data.project_aminities.filter(value => value.Category_name === 'Home_utilities').map(value => value.feature_name.replace(/_/g, ' ')),
        facing: data.project_aminities.filter(value => value.Category_name === 'Home_Facing').map(value => value.feature_name.replace(/_/g, ' ')),
        nearby_location: data.project_aminities.filter(value => value.Category_name === 'NearbyLocations').map(value => value.feature_name.replace(/_/g, ' ')),
        business_and_communication: data.project_aminities.filter(value => value.Category_name === 'Home_business_And_Communication').map(value => value.feature_name.replace(/_/g, ' ')),
    }
}
export default GetProjectData