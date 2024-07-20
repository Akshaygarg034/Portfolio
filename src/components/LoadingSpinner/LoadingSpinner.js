import styled, { keyframes } from 'styled-components'
// import { YinYang } from '../generalSvgs'
import loaderImg from "../../assets/Images/wheel.png"

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`


const Center = styled.button`
    position: absolute;
    top: ${props => props.loaded ? '85%' : '50%'};
    left: ${props => props.loaded ? '92%' : '50%'};
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 3s linear;
    }

    @media (max-width: 50em) {
        top: ${props => props.loaded ? '90%' : '50%'};
        left: ${props => props.loaded ? '90%' : '50%'};
    }

    @media (max-width: 650px) {
        left: ${props => props.loaded ? '89%' : '50%'};
    }

    @media (max-width: 450px) {
        left: ${props => props.loaded ? '87%' : '50%'};
    }
`

const StyledImg = styled.img`
    filter: invert(1);
    width: ${props => props.loaded ? '150px' : '220px'};
    height: ${props => props.loaded ? '150px' : '220px'};

    @media (max-width: 50em) {
        width: ${props => props.loaded ? '130px' : '200px'};
        height: ${props => props.loaded ? '130px' : '200px'};
    }

    @media (max-width: 650px) {
        width: ${props => props.loaded ? '110px' : '200px'};
        height: ${props => props.loaded ? '110px' : '200px'};
    }

    @media (max-width: 450px) {
        width: ${props => props.loaded ? '95px' : '200px'};
        height: ${props => props.loaded ? '95px' : '200px'};
    }
`;


const LoadingSpinner = ({ loaded }) => {
    return (
        <Center loaded={loaded}>
            <StyledImg src={loaderImg} alt="loader" loaded={loaded} />
            {/* <YinYang width={loaded ? 120 : 200} height={loaded ? 120 : 200} fill='currentColor' /> */}
        </Center>
    )
}

export default LoadingSpinner;
