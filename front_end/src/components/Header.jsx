import { Container, Menu, Item } from './styled/Header.styled'
import { useContext } from 'react'
import WaveContext from '../context/WaveContext'

const Header = () => {
    const {
        setWaveLogs, setDisplayOptions, setCaseStudy
    } = useContext( WaveContext );

  return (
    <Container>
        <Menu>
            <Item 
                onClick={() => setWaveLogs(prev => !prev)}
            > Wave Logs </Item>

            <Item
                onClick={() => {
                    window.open("https://rinkebyfaucet.com/", "_blank")
                    setDisplayOptions(prev => !prev);
                }}> Get Free ETH for Rinkeby's Testnet </Item>
            
            <Item 
                onClick={() => setCaseStudy(prev => !prev)}
            > GitHub Repo </Item>
        </Menu>
    </Container>
  )
}

export default Header