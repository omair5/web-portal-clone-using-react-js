const apiURL = 'http://localhost:3200/developer/Blog'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const GetBlogData = async (id) => {
    const response = await fetch(`${apiURL}/${id}`)
    const data = await response.json()
    return {
        blog_date:  `${monthNames[new Date( data.Date).getUTCMonth()]} ${new Date( data.Date).getUTCDate()},${new Date(data.Date).getUTCFullYear()}`,
        blog_category: data.blog_type,
        blog_title_image: data.blogimage[0].blog_image,
        blog_description: data.full_description,
        blog_title: data.title
    }
}
export default GetBlogData;