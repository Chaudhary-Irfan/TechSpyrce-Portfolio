import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome To!</h2>
            <h1>
              TechSpyrce
              <br />
              {/* <span>Software Service</span> */}
            </h1>
          </div>
          <div className="landing-info">
            <h3>We are Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designers</div>
              <div className="landing-h2-2">Developers</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developers</div>
              <div className="landing-h2-info-1">Designers</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
