import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Our <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "TB Diagnosis",
              type: "Mobile App",
              tools: "Java, XML, Machine Learning, Android Studio, Firebase",
              image: "/src/assets/logo (1).webp", // Replace with actual image path
            },
            {
              title: "Ride Booking App",
              type: "Mobile App",
              tools: "React Native, Figma",
              image: "/src/assets/allride1.webp", // Replace with actual image path
            },
            {
              title: "Mehfil App",
              type: "Mobile App (Ongoing Project)",
              tools: "React Native, Node.js, Expo, SQL",
              image: "/src/assets/splashscreen_logo.webp", // Replace with actual image path
            },
            {
              title: "ChatApp",
              type: "Mobile App (Ongoing Project)",
              tools: "React Native, Python Django, WebSocket",
              image: "/src/assets/ChatApp.webp", // Replace with actual image path
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.type}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
