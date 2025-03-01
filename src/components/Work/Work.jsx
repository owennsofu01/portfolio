import "react";
import { workData } from "../Data/Data"; // Adjust the path if needed
import "./Work.css"; // Assuming you want a CSS file for styling

const Work = () => {
  return (
    <section className="work-container">
      <h2>My Work Experience</h2>
      <div className="work-section">
        {workData.map(
          (workItem) =>
            workItem.title &&
            workItem.decription && (
              <div key={workItem.id} className="work-item">
                <h3>{workItem.title}</h3>
                <p>{workItem.decription}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Work;
