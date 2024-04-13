import Image from "next/image";
import "../styles/Home.css";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectsArr from "@/lib/projects";


export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="video-frame">
          {/* <video
            className="video"
            src={video}
            autoPlay
            loop
            muted
            preload="auto"
            poster="https://th.bing.com/th/id/OIP.gYyvBOuQwXSWuefMRBZp9gAAAA?pid=ImgDet&rs=1"
          /> */}

          <h1 className="welcome-txt">
            <span className="first-word">Welcome</span> to my portfolio!
          </h1>
          
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
