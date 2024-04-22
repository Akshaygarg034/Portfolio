import React, { memo } from 'react'
import { skills } from '../../data/SkillData'
import styles from './Skills.module.css';
import LazyLoad from 'react-lazyload';
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../Themes";
import LogoComponent from "../../subComponents/LogoComponent";
import HomeButton from '../../subComponents/HomeButton';
import BigTitlte from "../../subComponents/BigTitle";
import { motion } from 'framer-motion';

// Framer-motion Configuration
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const skillBubbleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}


const SkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <BigTitlte text="SKILLS" top="6.5%" right="5%" />
            <LogoComponent theme="dark" />
            <HomeButton />
            <section className={styles.skillSection}>
                <div className={styles.skills_wrapper}>
                    {skills.map((skill, idx) => (
                        <SkillCategory
                            name={skill.name}
                            items={skill.items}
                            key={idx}
                        />
                    ))}
                </div>
            </section>
        </ThemeProvider>
    )
};

const SkillCategory = ({ name, items }) => (
    <div className={styles.skill_category_container}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.skill_title}
        >
            <div className={styles.arrow_img_container}>
                <img src="/skills/arrow.svg" alt="arrow svg" />
            </div>
            <h3>
                {name}
            </h3>
        </motion.div>
        <motion.div className={styles.skills_container}
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true }}
        >
            {items.map((item, idx) => (
                <SkillBubble name={item} key={idx} />
            ))}
        </motion.div>
    </div>
);

const SkillBubble = memo(({ name }) => (
    <motion.div className={styles.skill_bubble_container}
        variants={skillBubbleVariant}
    >
        <LazyLoad once height={41.46} className={styles.skill_img_container}>
            <img src={`/skills/` + name + `.svg`} alt={name} loading="lazy" />
        </LazyLoad>
        <h3>{name}</h3>
    </motion.div>
));

export default SkillsPage;
