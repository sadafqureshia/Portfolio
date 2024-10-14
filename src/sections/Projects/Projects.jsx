import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={finflow}
          link="https://github.com/sadafqureshia/FinFlow.git"
          h3="FinFlow"
          p="Expense Tracker Website"
        />
        <ProjectCard
          src={notes}
          link="https://github.com/sadafqureshia/Flutter_Notes_app.git"
          h3="Notes"
          p="Notes Provider App"
        />
        <ProjectCard
          src={akal conference}
          link="https://github.com/sadafqureshia/conference.git"
          h3="Akal Conference"
          p="Conference Website"
        />
        <ProjectCard
          src={keepa health club}
          link="https://github.com/sadafqureshia/gym-website.git"
          h3="Keepa Health Club"
          p="Gym Website"
        />
      </div>
    </section>
  );
}

export default Projects;
