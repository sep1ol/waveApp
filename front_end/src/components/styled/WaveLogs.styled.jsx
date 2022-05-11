import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.div`
    border: 3px solid #d7001e;
    border-radius: 9px;
    width: 60vw;
    display: flex;
    justify-content: start;
    flex-direction: column;
    overflow-y: scroll;

    & *{
        margin: 0;
        margin-left: 1em;
        margin-right: 1em;
        margin-bottom: 1em;
    }
`

export const WaveItem = styled.div`
    & *{
        padding: 0;
        margin: 0;
    }

    border: 2px solid #d7001e;
    border-radius: 8px;
    margin-top: 1em;
    margin-right: 1em;
    padding: 0.4em 1em;

    & p {
        text-align: center;
        font-size: 1em;
    }
    
    & h3 {
        text-align: center;
        margin: 0 auto;
        margin-top: 0.3em;
        font-size: 0.75em;
    }

    &:hover{
        cursor: pointer;
        background-color: #333;
    }
`

export const WaveLog = styled.div`
    overflow-y: scroll;
    height: 70vh;

`