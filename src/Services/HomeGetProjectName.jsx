const apiURL = 'http://localhost:3200/project/projectname'
const HomeGetProjectName = async () => {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data.map(value => (
        { value: value.project_name, label: value.project_name }
    ))
}
export default HomeGetProjectName;