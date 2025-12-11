export default async function sitemap() {
    return [
        {
            url: "https://http://localhost:3000",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];
}