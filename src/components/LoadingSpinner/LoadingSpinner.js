import styled, { keyframes } from 'styled-components'
import { YinYang } from '../AllSvgs'

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
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 1.5s linear;
    }


    @media (max-width: 50em) {
        top: ${props => props.loaded ? '90%' : '50%'};
        left: ${props => props.loaded ? '90%' : '50%'};
        width: ${props => props.loaded ? '80px' : '150px'};
        height: ${props => props.loaded ? '80px' : '150px'};
    }

    @media (max-width: 30em) {
        width: ${props => props.loaded ? '40px' : '150px'};
        height: ${props => props.loaded ? '40px' : '150px'};
    }
`


const LoadingSpinner = ({loaded, setLoaded}) => {
    const handleClick = () => setLoaded(!loaded);
    return (
        <Center loaded={loaded}>
            <YinYang onClick={() => handleClick()} width={loaded ? 120 : 200} height={loaded ? 120 : 200} fill='currentColor' />
        </Center>
    )
}

export default LoadingSpinner;
