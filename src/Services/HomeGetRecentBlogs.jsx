const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const HomeGetRecentBlogs = async () => {
    const apiURL = `http://localhost:3200/developer/shortBlog?limit=3`
    const response = await fetch(apiURL)
    const { items } = await response.json()
    return {
        data: items.map(value => (
            {
                BlogDate: ` ${new Date(value.Date).getUTCDate()} ${monthNames[new Date(value.Date).getUTCMonth()]}`,
                BlogId: value.blog_id,
                BlogImage: value.blogimage[0].blog_image,
                BlogTitle: value.title,
                BlogShortDescription: value.short_description
            }
        )),
    }

}
export default HomeGetRecentBlogs;