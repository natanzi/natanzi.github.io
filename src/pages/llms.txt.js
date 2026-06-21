import aboutData from '../data/about.json';
import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';

export async function GET(context) {
    // Fetch blog posts to dynamically construct latest blog titles
    const postImportResult = import.meta.glob('../content/blog/**/*.md', { eager: true });
    const posts = Object.values(postImportResult);
    posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());

    const projectsList = projectsData.projects.map(proj => {
        return `- **${proj.title}**
  - *Description:* ${proj.description}
  - *Tech:* ${proj.tags ? proj.tags.join(', ') : ''}
  - *URL:* https://natanzi.com/projects/${proj.slug}`;
    }).join('\n\n');

    const experienceList = experienceData.experience.map(exp => {
        return `- **${exp.title}** (${exp.company}) | ${exp.period}
  - ${exp.description}`;
    }).join('\n\n');

    const blogList = posts.map(post => {
        const slug = post.file.split('/').pop().split('.').shift();
        return `- [${post.frontmatter.title}](https://natanzi.com/blog/${slug}) (${post.frontmatter.date})`;
    }).join('\n');

    // Clean markdown content links from about text for readability
    const cleanIntro = (aboutData.intro || '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
    const cleanMiddle = (aboutData.middle || '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
    const cleanConclusion = (aboutData.conclusion || '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');

    const content = `# Milad Natanzi

${cleanIntro}

${cleanMiddle}

${cleanConclusion}

## Info
- **Affiliation:** Worcester Polytechnic Institute (WPI)
- **Role:** Ph.D. Candidate & Graduate Research Assistant
- **Email:** milad@natanzi.com
- **Website:** https://natanzi.com
- **GitHub:** https://github.com/natanzi
- **LinkedIn:** https://www.linkedin.com/in/miladnatanzi
- **Google Scholar:** https://scholar.google.com/citations?user=P7cClxAAAAAJ&hl=en

## Research Focus & Expertise
- **O-RAN & Open RAN:** Developer of the OAIC (Open AI Cellular) and OAIC-T frameworks for testing and securing AI controllers in next-generation networks.
- **AI/ML for Networks:** Integrating LLMs (Large Language Models), reinforcement learning, and federated learning into radio access networks for beamforming optimization, traffic steering, and intelligent control.
- **Wireless Security:** Analysis of adversarial vulnerabilities in 5G/6G systems and AI-driven control loops.
- **Telecom Industry Experience:** 7+ years of experience in telecom data science, big data/RF optimization, and Ericsson Charging System revenue assurance at MTN Irancell and vendors.

## Key Projects

${projectsList}

## Professional Experience

${experienceList}

## Latest Blog Posts

${blogList}

## Sitemap
- [Home Page](https://natanzi.com/) - Main hub with active status, research summary, and quick links.
- [Projects Index](https://natanzi.com/projects) - Catalog of active research projects and platforms.
- [Curriculum Vitae](https://natanzi.com/cv) - Detailed academic, professional, and publication history.
- [Blog](https://natanzi.com/blog) - Technical posts, deep-dives into 5G/6G, security, and AI.
- [News](https://natanzi.com/news) - Updates on papers, conference presentations, and announcements.
- [Gallery](https://natanzi.com/gallery) - Travel, photography, and personal highlights.
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
}
