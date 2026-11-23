import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectModal from "@/components/ProjectModal";
import BlogArticle from "@/components/BlogArticle";
import { posts } from "@/content/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Arif` : "Arif" };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <ProjectModal>
      <BlogArticle post={post} />
    </ProjectModal>
  );
}
