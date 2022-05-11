import WaveContext from '../context/WaveContext'
import { useContext } from 'react'
import {
    Container, BackBtn, Content, Title, Intro
} from './styled/CaseStudy.styled'

const CaseStudy = () => {
    const {
        setCaseStudy, setDisplayOptions,
    } = useContext( WaveContext );

    return (    
    <Container>

    <BackBtn
        onClick={() => {
            setCaseStudy(prev => !prev);
            setDisplayOptions(prev => !prev);
        }}>&lt;&lt; BACK</BackBtn>

    <Title className="title">How was this website developed?</Title>

    <Intro>-- A CASE STUDY --</Intro>

    <Content>
    <h3>&gt;&gt;&gt; Development Environment</h3>
    <p>HardHat: I'm using this framework for building, testing and deploying smart contracts in solidity.</p>

    <h3>&gt;&gt;&gt; Writing the Smart Contract</h3>    
    <p>Solidity: chosen language for writing smart contracts to be deployed in Ethereum's network.</p>
    <ul>
    Functions...
        <li>
            wave( string memory _name ) => this function does 3 things. 
            <br/>First: adds 1 to the count of the total number of waves. 
            <br/>Second: it'll store some informations about the user such as name, wallet address and timestamp. 
            <br/>Third: this'll trigger a solidity event that we can use later to check for users' activity!
        </li>

        <li>
            getTotalWaves() => checks for how many waves are recorded on the smart contract's memory.
        </li>

        <li>
            getAllWaves() => gets the array of Structs that keeps information about the user, such as: wallet address, name input and timestamp.
            <br/>This is used to get data used on Wave Logs. 
        </li>
    </ul>

    <ul>
    Variables and important data...
        <li>
            totalWaves (state variable) => how many waves were sent to me. 
        </li>

        <li>
            NewWave (event) => event that stores an indexed user address (so we can find the data afterwards), name and timestamp.
        </li>
    </ul>
    </Content>
    </Container>
    )
}

export default CaseStudy