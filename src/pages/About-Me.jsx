import LuisOlmosImage from "../assets/my-picture.jpg";

export default function AboutMe() {
  return (
    <main className="container">
      <div className="row text-center text-lg-start">
        <h1 className="my-5 fw-bold">About Me</h1>
        <div className="col-lg-6 mb-5">
          <img id="about-me-img" src={LuisOlmosImage} alt="photo of me :)" />
        </div>
        <div className="col-lg-6 fs-5 mb-5">
          <p>
            I am a graphic designer, photographer, and aspiring web developer!
          </p>
          <p>
            I've attended and graduated from Del Rio High School in 2019, where
            I first started to get into graphic design. After a year being in
            junior college, I decided to go to Texas State Technical College,
            where I then received my Associate's of Applied Science in Digital
            Media Design in 2022. Here is where I also learned photography and
            videography skills.
          </p>
          <p>
            Currently, I am working as a graphic designer, while also learning
            coding skills for web development via the University of Texas at San
            Antonio's online bootcamp. The program is to end in mid-February,
            where I will receive a certificate of completion.
          </p>
        </div>
      </div>
    </main>
  );
}
