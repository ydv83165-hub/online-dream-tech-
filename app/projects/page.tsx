import type { Metadata } from "next";
import { ProjectsGallery } from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore website, software, app, e-commerce, news, and marketing projects by Online Dream Tech.",
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
