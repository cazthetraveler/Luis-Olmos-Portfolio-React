export default function Contact() {
  const checkEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = document.querySelector("#email-input").value;
    const emailAlert = document.querySelector("#email-alert");
    const emptyEmailAlert = document.querySelector("#empty-email-alert");

    if (emailInput == "") {
      //checks to see if the input is empty
      emptyEmailAlert.classList.remove("d-none");
      emailAlert.classList.add("d-none");
    } else {
      if (!emailInput.match(emailRegex)) {
        //if theres something, check regex format
        emailAlert.classList.remove("d-none");
        emptyEmailAlert.classList.add("d-none");
      } else {
        emailAlert.classList.add("d-none");
        emptyEmailAlert.classList.add("d-none");
      }
    }
  };

  const checkName = () => {
    const nameInput = document.querySelector("#name-input").value;
    const nameAlert = document.querySelector("#name-alert");

    if (nameInput == "") {
      nameAlert.classList.remove("d-none");
    } else {
      nameAlert.classList.add("d-none");
    }
  };

  const checkMessage = () => {
    const messageInput = document.querySelector("#floatingTextArea").value;
    const messageAlert = document.querySelector("#message-alert");

    if (messageInput == "") {
      messageAlert.classList.remove("d-none");
    } else {
      messageAlert.classList.add("d-none");
    }
  };

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
            onBlur={() => checkName()}
            required
          />
          <div
            id="name-alert"
            className={`alert alert-danger d-none`}
            role="alert"
          >
            This field needs to be filled out!
          </div>
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
            onBlur={() => checkEmail()}
            required
          />
          <div
            id="empty-email-alert"
            className={`alert alert-danger d-none`}
            role="alert"
          >
            This field needs to be filled out!
          </div>
          <div
            id="email-alert"
            className={`alert alert-danger d-none`}
            role="alert"
          >
            Email needs to be in a correct format!
          </div>
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
            onBlur={() => checkMessage()}
            required
          />
          <div
            id="message-alert"
            className={`alert alert-danger d-none`}
            role="alert"
          >
            This field needs to be filled out!
          </div>
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
