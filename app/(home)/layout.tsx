import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Sketchbook from "@/components/Sketchbook";
import HeroDown from "@/components/HeroDown";
import BlogArticle from "@/components/BlogArticle";
import { site, about, posts, sketchbook } from "@/content/content";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main id="main" className="page home">
        <SiteNav active="work" />

        {/* ---------- hero: fills the first screen ---------- */}
        <section id="sketchbook" className="hero">
          <p className="hero-kicker">{about.eyebrow}</p>
          <h1 className="hero-name">{site.name}</h1>
          <Sketchbook pages={sketchbook} />
          <HeroDown />
        </section>

        {/* ---------- blog posts: rendered inline on the page ---------- */}
        <section id="projects">
          <h2 className="section-label">{site.labels.projects}</h2>
          <div className="blog-posts-inline">
            {posts.map((post) => (
              <BlogArticle key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>

      {children}
    </>
  );
}
