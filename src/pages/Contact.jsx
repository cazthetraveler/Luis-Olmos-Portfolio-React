export default function Contact() {
  return (
    <main className="container">
      <div className="row text-center text-lg-start">
        <h1 className="my-5 fw-bold">Contact</h1>
      </div>
      <form className="col-lg-6 m-auto m-lg-0 mb-5">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label fs-2">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            id="name-input"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label fs-2">
            E-mail:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail..."
            id="email-input"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingTextArea" className="fs-2">
            Message:
          </label>
          <textarea
            className="form-control"
            placeholder="Message..."
            id="floatingTextArea"
            style={{ height: "150px" }}
            required
          />
        </div>
        <div className="mb-5">
          <button type="button" className="btn btn-success fs-4 mb-5">
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}
