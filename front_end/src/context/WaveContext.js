import { createContext, useState, useEffect, useContext } from "react"
import { ethers } from "ethers";
import abi from '../utils/WavePortal.json';

const WaveContext = createContext();

export const WaveProvider = ({children}) => {
    const [caseStudy, setCaseStudy] = useState(false);
    const [waveLogs, setWaveLogs] = useState(false);

    const [currentAccount, setCurrentAccount] = useState("");
    const [alreadyWaved, setAlreadyWaved] = useState(false);
    const [loadingWave, setLoadingWave] = useState(false);

    const [name, setName] = useState("");
    const [waves, setWaves] = useState([]);

    // Old Contract...
    const contractABI = abi.abi;
    const contractAddress = '0xFB405058EaEBcDa544d1A91D62E9055943fe64BA';

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
            alert("Make sure you have Metamask!");
            return;
            } else {
            console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
            const account = accounts[0];
            setCurrentAccount(account);
            console.log("Found an authorized account:", account);

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
            
            var userWallet = account.toLowerCase();
            var listOfWallets = await wavePortalContract.getAllWaves();
            console.log(listOfWallets)
            listOfWallets = listOfWallets.map(each => each[0].toLowerCase());

            if( listOfWallets.includes(userWallet) ){
                setAlreadyWaved(true);
            }
            } else {
            setCurrentAccount("");
            setAlreadyWaved(false);
            console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
            alert("Make sure you have the Metamask extension!");
            return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);

            console.log("Connected", accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }

    const wave = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

            const waveTxn = await wavePortalContract.wave( name );
            console.log(waveTxn);
            console.log("Mining...", waveTxn.hash);

            setLoadingWave(true);
            await waveTxn.wait();
            setLoadingWave(false);
            setAlreadyWaved(true);
            
            console.log("Mined -- ", waveTxn.hash);
            } else {
            alert("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getWaves = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Make sure you have Metamask!");
                return;
            }

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log(wavePortalContract)
            var listOfWaves = await wavePortalContract.getAllWaves();
            console.log(listOfWaves)
            
            var registeredWaves = [];
            listOfWaves.map(wave => {
                console.log(wave)
                registeredWaves.push({
                    address: wave[0],
                    name: wave[1],
                    timestamp: new Date(wave[2]*1000)
                });
            });

            setWaves( registeredWaves );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <WaveContext.Provider
        value={{
            checkIfWalletIsConnected,
            alreadyWaved,
            currentAccount,
            loadingWave,
            connectWallet,
            wave,
            caseStudy, setCaseStudy,
            waveLogs, setWaveLogs,
            name, setName,
            getWaves,
            waves

        }}>
            {children}
        </WaveContext.Provider>
    )
}

export default WaveContext