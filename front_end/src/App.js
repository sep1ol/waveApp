import './App.css';
import { useEffect, useContext, useState } from 'react';
import WaveContext from './context/WaveContext';
import CaseStudy from './components/CaseStudy';
import WaveLogs from './components/WaveLogs';
import Header from './components/Header.jsx';

export default function App() {

  const {
    checkIfWalletIsConnected,
    alreadyWaved,
    currentAccount,
    loadingWave,
    connectWallet,
    wave,
    caseStudy, setCaseStudy,
    waveLogs, setWaveLogs,
    name, setName

  } = useContext( WaveContext );
  
  useEffect(() => {
    checkIfWalletIsConnected();
    
  },[]);
  
  if( caseStudy ){
    return <CaseStudy />
  }else if( waveLogs ){
    return <WaveLogs />
  }

  return (
    <>
    <Header />
    <div className="container">
       <div className="screen">
          <p className="greetings">Hello, Friend.</p>
          <h3 className="title">
             I am sepiol, a web3 developer
          </h3>
          <div className="box--outer">
             <div className="box">
                <div className="box--inner">
                   <div className="content">
                      <div className="holder">
                        <div className="instructions">
                           <p>how to contact me:</p>
                           <ol>
                              <li>Connect metamask wallet</li>
                              <li>Send me a wave of bits</li>
                              <li>Your wave will be recorded on ethereum's blockchain <span className="item3">(Rinkeby Testnet - it's free!)</span></li>
                              <li>Link to my discord will be unlocked!</li>
                           </ol>
                        </div>
                        {alreadyWaved ?
                          <button 
                             className="waveBtn"
                          >
                              <a
                                target="_blank"
                                href="https://discord.gg/WBw96NxU"
                              >Sepiol's Discord Here!</a>
                          </button>
                          :
                          currentAccount ?
                            <div className="inputBox">
                              <input
                                className="textField"
                                type='text' 
                                value={ name }
                                placeholder="YOUR NAME"
                                onChange={(e) => setName(e.currentTarget.value)}  
                              />
                              <button 
                                className="waveBtn"
                                disabled = {loadingWave}
                                onClick={() => {
                                  wave();
                                }}>{ loadingWave ? 
                                      <>SENDING...</> :
                                      <div>
                                        <>SEND 11011001011...</>
                                      </div>
                              }</button>
                            </div>
                          :
                           <button 
                             className="waveBtn"
                             onClick={() => {
                               connectWallet();
                             }}>Connect Wallet</button>
                          }
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </>);
}