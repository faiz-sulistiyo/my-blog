import { fetchPosts } from '@/services/blog';
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

    const data = await fetchPosts({page:1,per_page:10});

    let blogSiteMap: MetadataRoute.Sitemap = [];

    if (data) {
        blogSiteMap = data.map((blog) => {
            const lastModified = new Date();

            return {
                url: `${baseUrl}/blog/${blog.id}`,
                lastModified
            };
        })
    }
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        ...blogSiteMap
    ]
}