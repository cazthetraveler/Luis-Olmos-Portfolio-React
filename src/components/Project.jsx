import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <div className="row d-flex flex-wrap justify-content-center">
      {props.projects.map((project) => {
        // okay sooo idk why this is giving me red squigglies, it still works though
        return (
          <div
            key={project.id}
            className="col-lg-4 col-xl-3 card m-3 text-light text-center"
          >
            <img
              className="m-auto card-img-top"
              src={project.image.source}
              alt={project.image.alt}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <div className="card-body fs-1">
              <Link
                target="_blank"
                className="link-light mx-2"
                to={project.links.repo}
                datatype-bs-toggle="tooltip"
                data-bs-title="Repository"
              >
                <i className="bi bi-github"></i>
              </Link>
              <Link
                target={project.links.deployed ? "_blank" : ""}
                className={`link-light mx-2 ${
                  project.links.deployed ? "" : "disabled"
                }`}
                aria-disabled={project.links.deployed ? false : true}
                to={project.links.deployed ? project.links.deployed : ""}
                data-bs-toggle="tooltip"
                data-bs-title="Deployed Application"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
