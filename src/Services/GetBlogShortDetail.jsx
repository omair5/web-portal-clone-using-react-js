const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const GetBlogShortDetail = async (pageNumber) => {
    const apiURL = `http://localhost:3200/developer/shortBlog?page=${pageNumber}`
    const response = await fetch(apiURL)
    const { items, meta } = await response.json()
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
        totalPages: meta.totalPages
    }

}

export default GetBlogShortDetail;