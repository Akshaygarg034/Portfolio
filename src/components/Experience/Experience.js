import React, { useEffect, useState } from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeProvider } from "styled-components";
import styles from './Experience.module.css';
import { experiences } from "../../data/ExperienceData";
import { useMediaQuery } from '@mui/material';
import HomeButton from '../../subComponents/HomeButton';
import { DarkTheme } from "../Themes";
import LogoComponent from "../../subComponents/LogoComponent";
import AnchorComponent from '../../subComponents/Anchor'

const Experience = () => {
    const isMobile = useMediaQuery('(max-width: 767.5px)');
    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            <LogoComponent theme="dark" />
            <HomeButton />
            <AnchorComponent number={numbers} theme = "dark"/>
            <section id="experience" className={styles.experience}>
                <div className={styles.wrapper}>
                    <p className={styles.subText}>WHERE I’VE WORKED</p>
                    <h2 className={styles.headText}>Work Experience</h2>
                </div>
                <div className={styles.timelineWrapper}>
                    <VerticalTimeline animate={!isMobile} lineColor="rgb(243, 243, 243)">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </section>
        </ThemeProvider>
    )
};

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#0F1C2A",
                color: "#fff",
                boxShadow: `0 3px 0 ${experience.bottomColor ? experience.bottomColor : '#ddd'}`
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            icon={
                <div className={styles.companyIconWrapper}>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className={styles.companyIcon}
                        loading="lazy"
                    />
                </div>
            }
        >
            <div>
                <h3 className={styles.companyTitle}>{experience.title}</h3>
                <p
                    className={styles.companyName}
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className={styles.ul_exp_points}>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className={styles.li_exp_points}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default Experience;