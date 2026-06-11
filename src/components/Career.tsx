import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Product Manager</h4>
                <h5>DreamFolks Services Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              15+ banking partners · 3M+ cardholders · API-first benefit suite
              (lounge, F&amp;B, golf) · Spend-Based Programs: 40% cost reduction
              for tier-1 banks · PCI DSS, ISO, SOC, ITGC — zero critical findings ·
              Mentored 2 PMs
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Products Lead</h4>
                <h5>Vaco Binary Semantics · Google Knowledge Panels</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              Google Knowledge Graph · 12+ schemas consolidated · 18% search
              relevance improvement · Agile backlog ownership · US–India
              distributed delivery
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Asst. Products Manager</h4>
                <h5>WNS Global Services · Google Ads</h5>
              </div>
              <h3>2019–21</h3>
            </div>
            <p>
              Google Ads data enrichment platform · Product KPI definition &amp;
              tracking · Agile sprint management · US–India cross-functional
              delivery
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Asst. Manager — Ops &amp; Analytics</h4>
                <h5>Concentrix</h5>
              </div>
              <h3>2014–19</h3>
            </div>
            <p>
              24/7 operations leadership · 22% productivity improvement ·
              15% attrition reduction · Onboarding &amp; training programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
