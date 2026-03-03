import rss from '@astrojs/rss';
import siteSettings from '../data/settings.json';

export async function GET(context) {
    // Load all markdown files from the blog directory
    const postImportResult = import.meta.glob('../content/blog/**/*.md', { eager: true });
    const posts = Object.values(postImportResult);

    // Sort posts by date descending
    posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());

    return rss({
        // `<title>` field in output xml
        title: 'Milad Natanzi | Blog & Research',
        // `<description>` field in output xml
        description: 'Latest thoughts on 5G/6G, Machine Learning, and Enterprise Telecom systems.',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: 'https://natanzi.com',
        // Array of `<item>`s in output xml
        items: posts.map((post) => ({
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
            description: post.frontmatter.description,
            // Compute slug from filename
            link: `/blog/${post.file.split('/').pop().split('.').shift()}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    });
}
