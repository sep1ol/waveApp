import { Container, Content, WaveItem, WaveLog } from './styled/WaveLogs.styled'
import { BackBtn } from './styled/CaseStudy.styled'
import { useContext, useEffect } from 'react'
import WaveContext from '../context/WaveContext'

const WaveLogs = () => {
    const {
        setWaveLogs,
        getWaves,
        waves,
    } = useContext( WaveContext );

    useEffect(() => {
        getWaves();
    }, []);

    return (
    <Container>
        <BackBtn
            onClick={() => {
            setWaveLogs(prev => !prev);
        }}>&lt;&lt; BACK</BackBtn>

        <h3>Click an item to see the transaction on chain</h3>

        <WaveLog>
            {waves.map(wave => (
                <WaveItem
                    onClick={() => {
                        window.open(`https://rinkeby.etherscan.io/address/${wave.address}`, `_blank`);
                    }}
                >
                    <p>[{wave.name}] waved at [{wave.timestamp.toLocaleDateString()}]!</p>
                    <h3>address: {wave.address}</h3>
                </WaveItem>
            ))}
        </WaveLog>
    </Container>    
    )
}

export default WaveLogs