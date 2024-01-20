import LuisOlmosResume from "../assets/LuisOlmosResume.pdf";

export default function Resume() {
  return (
    <main className="container">
      <div className="row text-center text-lg-start">
        <h1 className="mt-5 fw-bold">Resume</h1>
        <a
          className="mb-5 fst-italic fs-5"
          href={LuisOlmosResume}
          target="_blank"
          rel="noreferrer"
          download="Luis-Olmos-Resume"
        >
          Download Resume
        </a>
        <div className="col text-start">
          <h2>Front-End Skills:</h2>
          <ul className="mb-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
          <h2>Back-End Skills:</h2>
          <ul className="mb-5">
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MVC</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
