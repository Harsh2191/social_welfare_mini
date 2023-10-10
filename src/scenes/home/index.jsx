import CarouselComponent from "../../components/CarouselComponent";
import { Modal, Button, Form } from "react-bootstrap";
import Logo from "../../images/septic-tank.png";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import SignupLoginModal from "../../components/SignupLoginModal";
import timeline from "../../images/timeline.png";
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      toast.custom(
        (t) => (
          <div
            style={{
              fontFamily: "Source Sans Pro",
              backgroundColor: "rgb(244,244,244)",
              color: "black",
              padding: "4px 10px",
              border: "1px solid grey",
              borderRadius: "7px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Note</h2>
            <p style={{ fontSize: "18px", margin: "0", fontWeight: "500" }}>
              Please login with the following credentials to see the working
              model of our project with previously recorded data:
            </p>
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0" }}>
              Email:abc@sample.com
            </p>
            <p style={{ fontWeight: "bold", fontSize: "18px", margin: "0" }}>
              Password:12345678
            </p>

            <p style={{ fontSize: "18px", margin: "0", fontWeight: "500" }}>
              (As our project works on realtime data,it displays realtime values{" "}
              <i>only </i>
              when we start the hardware component.To check our website without
              data (Static) You can signup with any mail-id.)
            </p>
            <button
              style={{
                fontSize: "24px",
                position: "absolute",
                top: "8px",
                right: "8px",
                border: "none",
                backgroundColor: "rgb(244,244,244)",
              }}
              onClick={() => toast.dismiss(t)}
            >
              ✕
            </button>
          </div>
        ),
        { duration: 100000 }
      );
    }, 3000);
  }, []);
  return (
    <>
      <SignupLoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <header
        className="header"
        style={{ position: "fixed", zIndex: 1000, backgroundColor: "#113946" }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img src={Logo} width={30} alt="" />
            <div className="Name mt-1">SEPTIC SAVIOURS</div>
          </div>
        </a>
        <div className="header-links">
          <ul className="header-link-items">
            <li>
              <Button variant="secondary" onClick={openModal}>
                <div className="logg" style={{ fontFamily: "Source Sans Pro" }}>
                  Sign-up | Log-in
                </div>
              </Button>
            </li>
          </ul>
        </div>
      </header>
      <CarouselComponent />
      <section id="AboutUs">
        <h1
          style={{
            fontFamily: "Source Sans Pro",
            fontWeight: "bold",
            fontSize: "3.5em",
          }}
        >
          About
        </h1>
        <section className="sec">
          <div className="about">
            <div className="septic">
              <div className="content_">
                <h2 style={{ color: "#142a40", textAlign: "center" }}>
                  Septic Tank
                </h2>
                <p style={{ color: "#142a40", marginBottom: "15px" }}>
                  A septic tank is a fundamental component of a septic system,
                  which serves as an on-site wastewater treatment system in
                  areas lacking access to centralized sewage infrastructure. Its
                  primary purpose is to separate solid waste, oils, and grease
                  from household wastewater, enabling further treatment of the
                  liquid effluent. Typically constructed from materials like
                  concrete, fiberglass, or plastic, septic tanks are buried
                  underground and consist of two chambers separated by a baffle.
                  Local regulations govern the installation, maintenance, and
                  inspection of septic systems to ensure their safe and
                  effective operation. Failure to adhere to these regulations or
                  neglecting maintenance can result in groundwater and surface
                  water pollution, posing health and environmental risks.
                </p>
              </div>
            </div>
            <div className="idea">
              <div className="content_">
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
                  Our Idea
                </h2>
                <p>
                  Welcome to Septic Saviours, where safety is paramount in
                  septic tank cleaning. In India, 339 lives have tragically been
                  lost due to insufficient precautions. We've revolutionized
                  this industry with real-time sensor technology. Our
                  cutting-edge sensors eliminate the need for workers to enter
                  hazardous tanks, significantly reducing risks. They provide
                  constant monitoring, optimizing cleaning processes and
                  ensuring environmental responsibility. Customers can trust
                  that our services prioritize safety, efficiency, and
                  environmental sustainability. Join us in transforming septic
                  tank cleaning, preventing accidents, and saving lives, while
                  maintaining the cleanliness of our communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <div id="dot">
        <div className="circles one"></div>
        <div className="circles two"></div>
        <div className="circles three"></div>
        <div className="circles middle"></div>
        <div className="circles three"></div>
        <div className="circles two"></div>
        <div className="circles one"></div>
      </div> */}

      {/* <section style={{ backgroundColor: "white" }}>
        <h1
          id="works"
          style={{
            color: "white",
            paddingTop: "100px",
            backgroundColor: "#142a40",
            border: "0px",
            margin: "0px",
          }}
        >
          How it Works ?
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 250">
          <path
            fill="#142a40"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div id="work">
          <div className="circle">
            <p>Sensors in Tanks</p>
          </div>
          <span className="arrow"></span>
          <div className="circle">
            <p>Data Recorded</p>
          </div>
          <span className="arrow"></span>
          <div className="circle">
            <p>User Dashboard</p>
          </div>
          <span className="arrow"></span>
          <div className="circle">
            <p>Tank Neutralizing</p>
          </div>
          <span className="arrow"></span>
          <div className="circle">
            <p>One Life Saved</p>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 180">
          <path
            fill="#142a40"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section> */}
      {/* <div id="dot">
        <div className="circles one"></div>
        <div className="circles two"></div>
        <div className="circles three"></div>
        <div className="circles middle"></div>
        <div className="circles three"></div>
        <div className="circles two"></div>
        <div className="circles one"></div>
      </div> */}
      <section style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Source Sans Pro",
            fontWeight: "bold",
            fontSize: "3.5em",
            marginBottom: "7vw",
          }}
        >
          How it works?
        </h2>
        <img
          className="shadow-lg"
          src={timeline}
          style={{ maxWidth: "80%" }}
          alt=""
        />
      </section>

      <section>
        <div id="benefit">
          <h1 id="ben">Benefits</h1>
          {/* <hr></hr> */}
          <div id="list">
            <ul>
              <li>
                The most critical benefit is the protection of workers' lives
                from harmful gases like H2S,CH4 and CO2.
              </li>
              <li>
                Preventing harmful gas leaks or seepage from the septic tank
                into the surrounding soil can help preserve local ecosystems and
                groundwater quality.
              </li>
              <li>
                Sensors can provide real-time data on gas levels, enabling
                workers to make informed decisions about when it is safe to
                enter a septic tank for maintenance or cleaning.
              </li>
              <li>
                Sensor data can be collected and analyzed over time to identify
                trends and potential issues within the septic system.
              </li>
              <li>
                Fewer accidents and injuries mean lower medical expenses,
                reduced worker's compensation claims, and less downtime due to
                accidents.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <h1 id="tagline">Cleaning Made Safe</h1>
      <section id="foot">
        <footer id="foot2">
          <div id="copyright">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
          <h6>© 2023</h6>
        </footer>
      </section>
      <Toaster position="bottom-right" />
    </>
  );
};

export default Home;
