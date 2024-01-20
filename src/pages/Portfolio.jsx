import projects from "../projects";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <main className="container my-3">
      <div className="row text-center text-lg-start">
        <h1 className="my-5 fw-bold">Portfolio</h1>
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-center">
            <Project projects={projects} />
          </div>
        </div>
      </div>
    </main>
  );
}
