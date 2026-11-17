import { useEffect } from "react";
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

import { Home } from "./components/Home/Home";
import { ServicesPreview, FeaturedProjects, CtaBand } from "./components/Home/HomeSections";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Service } from "./components/Service/Service";
import { Project } from "./components/Project/Project";
import { ProjectDetail } from "./components/Project/ProjectDetail";
import Blog from "./components/Blog/Blog";
import Skill from "./components/Skills/Skill";
import { pages, projectPages, SITE_URL, OG_IMAGE } from "./seo";
import type { PageSeo } from "./seo";

// Start each new page at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Per-page <title>, description, canonical and social tags + a page transition
const Page = ({ seo, children }: { seo: PageSeo; children: ReactNode }) => {
  const url = `${SITE_URL}${seo.path}`;
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.path !== "/" && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                ...(seo.path.startsWith("/projects/")
                  ? [{ "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` }]
                  : []),
                {
                  "@type": "ListItem",
                  position: seo.path.startsWith("/projects/") ? 3 : 2,
                  name: seo.title.split(" | ")[0],
                  item: url,
                },
              ],
            })}
          </script>
        )}
      </Helmet>
      {children}
    </motion.main>
  );
};

// Case-study page: SEO comes from the project's slug
const ProjectRoute = () => {
  const { slug } = useParams();
  const seo = projectPages.find((p) => p.path === `/projects/${slug}`);
  if (!seo) return <Navigate to="/projects" replace />;
  return (
    <Page seo={seo}>
      <ProjectDetail />
    </Page>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page seo={pages.home}>
              <Home />
              <ServicesPreview />
              <FeaturedProjects />
              <CtaBand withStats />
            </Page>
          }
        />
        <Route path="/about" element={<Page seo={pages.about}><About /></Page>} />
        <Route path="/services" element={<Page seo={pages.services}><Service /></Page>} />
        <Route path="/projects" element={<Page seo={pages.projects}><Project /></Page>} />
        <Route path="/projects/:slug" element={<ProjectRoute />} />
        <Route path="/skills" element={<Page seo={pages.skills}><Skill /></Page>} />
        <Route path="/blog" element={<Page seo={pages.blog}><Blog /></Page>} />
        <Route path="/contact" element={<Page seo={pages.contact}><Contact /></Page>} />
        {/* Old in-page anchors and unknown paths go home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export const HomeWrapper = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <AnimatedRoutes />
    <Footer />
    <WhatsAppButton />
  </BrowserRouter>
);
