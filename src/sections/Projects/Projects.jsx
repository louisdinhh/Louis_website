import styles from './ProjectsStyles.module.css';
import rover from '../../assets/rover.png';
import drone from '../../assets/drone.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'> Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={rover} 
                         link='https://github.com/Capstone-Rover/beast_final' 
                         h3="RMIT Lunar Rover"
                         p="As part of the RMIT Rover Team"
                         />

            <ProjectCard src={drone} 
                         link='https://github.com/Capstone-Rover/beast_final' 
                         h3="RMIT Maritime Drone"
                         p="As part of the RMIT UAS Research Team"
                         />
        </div>
    </section>
  )
}

export default Projects
