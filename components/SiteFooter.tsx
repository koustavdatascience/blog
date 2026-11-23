import { site } from "@/content/content";

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <p className="site-foot-c">{site.footer}</p>
    </footer>
  );
}
