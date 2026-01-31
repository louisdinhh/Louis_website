import styles from './HeroStyles.module.css';
import heroImg from '../../assets/download.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/DuongDinhResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
             src={heroImg} 
             alt="Profile picture" 
        />
        <img className={styles.colormode} 
             src={themeIcon} 
             alt="Color mode icon" 
             onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1> Hoang Anh Duong <br/> Dinh</h1>
        <h2>Mechatronics Engineer Graduate</h2>
        <span>
            <a href="https://www.linkedin.com/in/louis-dinhh/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
            <a href="https://github.com/louisdinhh" target="_blank">
                <img src={githubIcon} alt="Github icon" />
            </a>
        </span>
        <p>I'm an aspiring Robotics Software Engineer.
           Currently flooding my GitHub with personal and 
           collaborative project in Robotics and ROS. I have experience in both mechanical design/analysis
           as well as software development, especially in AI & ML. Let's get to know me through my gallery!
        </p>
        <a href={CV}>
            <button className="hover">Resume</button>
        </a>
    </div>
  </section> 
  );
}

export default Hero;
