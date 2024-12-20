import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../components/generalSvgs'
import { DarkTheme } from "../components/Themes";


const Container = styled.div`
    position: relative;

    @media (max-width: 40em) {
        display: none;
    }
`
const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
    transform: rotate(135deg);

    }

`

const PreDisplay = styled.div`
    position: absolute;
    top:0;
    right: 2rem;
`


const AnchorComponent = (props) => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
            //diff*100/scrollposition
            let diffP = (diff * 100) / (bodyHeight - windowSize);

            ref.current.style.transform = `translateY(${-diffP}%)`

            if (window.scrollY > 5) {
                hiddenRef.current.style.display = 'none'
            } else {
                hiddenRef.current.style.display = 'block'
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <Container>
            <PreDisplay ref={hiddenRef} className='hidden'>

                <Anchor width={70} height={70} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </PreDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.number)].map((x, id) => {
                        return <Link key={id} width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </Slider>
        </Container>
    )
}

export default AnchorComponent