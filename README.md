# Milad Natanzi — Personal Website & Portfolio

Welcome to the repository for my personal academic and professional website, hosted at [natanzi.com](https://natanzi.com).

This website serves as a hub for my Ph.D. research, telecom experience, technical publications, blog articles, and travel gallery.

## 🛠️ Stack & Technologies
- **Framework:** [Astro](https://astro.build) (Static Site Generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Content Management:** [Decap CMS](https://decapcms.org) (Git-based CMS for blog posts, CV entries, news, and projects)
- **Deployment:** GitHub Pages / Netlify

## 📝 Content Management (Admin Panel)
You can manage all pages, experience history, news announcements, travel photos, and blog posts directly from the CMS admin dashboard at:
👉 **[natanzi.com/admin](https://natanzi.com/admin/)**

All changes published from the admin panel are committed back to this repository and deployed automatically.

## 📂 Project Structure
- `src/pages/` - Site pages and routes (Home, Blog, CV, News, Projects, Gallery, and dynamic detail pages).
- `src/layouts/` - Reusable page layouts (e.g., Blog Layout).
- `src/data/` - JSON data files managed by Decap CMS (experience, projects, skills, site settings, gallery).
- `src/content/` - Markdown blog posts managed by Decap CMS.
- `public/` - Static assets (uploads, fonts, icons, Netlify CMS configs).
