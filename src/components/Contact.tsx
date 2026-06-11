import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/vishalsinghiim2005/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vishalsinghiim2005
              </a>
            </p>
            <p>
              <a
                href="mailto:vishal.singh980@gmail.com"
                data-cursor="disable"
              >
                vishal.singh980@gmail.com
              </a>
            </p>
            <p>Delhi, India · +91 7838908400</p>
            <h4>Education</h4>
            <p>
              MBA (EPGP) — Indian Institute of Management, Kozhikode · 2025–2027
            </p>
            <p>
              B.Com — DDU University · 2020–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/vishalsinghiim2005/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "20px" }}>Certifications</h4>
            <p style={{ fontSize: "13px", lineHeight: "22px", opacity: 0.7 }}>
              PMP Trained · Agile &amp; Scrum · ISO / PCI-DSS IT Controls ·
              Design Thinking · AWS QuickSight · Google Data Studio
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Senior Product Manager <br /> <span>Vishal Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
