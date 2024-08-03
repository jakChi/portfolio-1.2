import "../styles/Home.css";
import ProjectCard from "../components/ProjectCard";
import ProjectsArr from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Hi! I am Jakob, Master of &lt;divs/&gt;</h1>
          <h2>
            this is no longer current version, you can see new one{" "}
            <Link href={""}>here</Link>
          </h2>
        </div>
      </section>
      <section className="projects-rev">
        <h2 className="title">Projects review</h2>
        <div className="grid">
          {ProjectsArr.map((project, index) => (
            <ProjectCard
              key={index}
              className={project.className}
              picSrc={project.picSrc}
              caption={project.caption}
              src={project.githubUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
