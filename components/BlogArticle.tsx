import type { Post } from "@/content/content";

// Detects "01 / The City — body text" pattern and splits into label + body
function parsePara(content: string): { label: string | null; body: string } {
  const match = content.match(/^(\d{2}\s*\/\s*[^—–]+)[—–]\s*([\s\S]+)$/);
  if (match) return { label: match[1].trim(), body: match[2].trim() };
  return { label: null, body: content };
}

export default function BlogArticle({ post }: { post: Post }) {
  return (
    <article className="blog-article">

      {/* header */}
      <div className="blog-article-head">
        <h2 className="blog-article-title">{post.title}</h2>
        <span className="blog-article-date">{post.date}</span>
      </div>

      {/* cover image */}
      {post.coverImage && (
        <div className="blog-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.coverImage} alt={post.coverImageAlt ?? post.title} />
        </div>
      )}

      {/* body blocks */}
      <div className="blog-blocks">
        {post.body.map((block, i) => {

          if (block.type === "image-trio") {
            return (
              <div key={i} className="blog-trio">
                {block.images.map((img, j) => (
                  <figure key={j} className="blog-trio-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} />
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            );
          }

          if (block.type === "text") {
            const { label, body } = parsePara(block.content);
            // Sign-off paragraph
            const isSignoff = body.startsWith("See you on the riverbank");
            return (
              <div key={i} className={`blog-para-wrap${label ? " blog-para-wrap--section" : ""}`}>
                {label && <p className="blog-section-label">{label}</p>}
                <p className={`blog-para${isSignoff ? " blog-signoff" : ""}`}>{body}</p>
              </div>
            );
          }

          if (block.type === "image") {
            return (
              <figure key={i} className="blog-single-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={block.src} alt={block.alt} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }

          return null;
        })}
      </div>

    </article>
  );
}
