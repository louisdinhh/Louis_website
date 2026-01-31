import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/tick-mark.png';
import SkillList from '../../common/SkillList';

function Skills() {
  return(
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JS"/>
            <SkillList src={checkMarkIcon} skill="Node.js"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="C/C++"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="OpenCV"/>
            <SkillList src={checkMarkIcon} skill="Pytorch"/>
        </div>
        <hr/>
    </section>
  );
}

export default Skills;
