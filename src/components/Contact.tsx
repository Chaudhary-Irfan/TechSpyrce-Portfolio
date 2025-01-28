import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:chaudharyirfan0420@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="enable"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="/src/assets/envelope-filled.webp"
                  alt="Email"
                  style={{ width: '20px', height: '20px' }}
                />
                techspyrce.connect@gmail.com
              </a>
            </p>

            <h4>Skype</h4>
            <p>
              <a
                href="skype:live:.cid.b24c3f7e358a7cf0?chat"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="enable"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="/src/assets/skype.webp"
                  alt="Skype"
                  style={{ width: '20px', height: '20px' }}
                />
                Irfan
              </a>
            </p>
            <p>
              <a
                href="skype:live:muqureshi8549?chat"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="enable"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="/src/assets/skype.webp"
                  alt="Skype"
                  style={{ width: '20px', height: '20px' }}
                />
                Mutti
              </a>
            </p>


          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Chaudhary-Irfan"
              target="_blank"
              data-cursor="enable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chaudhary-irfan/"
              target="_blank"
              data-cursor="enable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Ch_Irfan_Dev?s=08"
              target="_blank"
              data-cursor="enable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ch_irf_an/"
              target="_blank"
              data-cursor="enable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>TechSpyrce</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
