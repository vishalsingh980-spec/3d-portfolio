import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const base = import.meta.env.BASE_URL;
const projects = [
  {
    title: "DreamFolks Card Platform",
    category: "API-First Card Benefit Platform · Fintech",
    tools: "15+ Banking Partners · 3M+ Cardholders · Real-time Benefit Redemption · Lounge · F&B · Golf",
    image: `${base}images/sapphire.png`,
    link: "https://www.linkedin.com/in/vishalsinghiim2005/",
  },
  {
    title: "Spend-Based Programs",
    category: "Cost Optimisation Product · DreamFolks",
    tools: "40% Reduction in Cardholder Benefit Costs · Tier-1 Banks · Scalable Benefit Architecture",
    image: `${base}images/Maxlife.png`,
    link: "https://www.linkedin.com/in/vishalsinghiim2005/",
  },
  {
    title: "Google Knowledge Graph",
    category: "Search Relevance Product · Vaco / Google",
    tools: "18% Quality Score Improvement · 12+ Schemas Consolidated · Agile Backlog · US–India Delivery",
    image: `${base}images/Solidx.png`,
    link: "https://www.linkedin.com/in/vishalsinghiim2005/",
  },
  {
    title: "Compliance Programme",
    category: "Enterprise Governance Product · DreamFolks",
    tools: "PCI DSS · ISO · SOC · ITGC · Zero Critical Findings · Regulatory Roadmap Ownership",
    image: `${base}images/bond.png`,
    link: "https://www.linkedin.com/in/vishalsinghiim2005/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Key <span>Achievements</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Highlights & Impact</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
