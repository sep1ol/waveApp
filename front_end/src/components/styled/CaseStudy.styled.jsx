import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BackBtn = styled.button`
    font-family: inherit;
    color: inherit;
    background-color: inherit;
    border-style: none;
    font-size: 1em;
    position: absolute;
    left: 5%;
    top: 5%;
    font-weight: 1000;

    &:hover{
        color: white;
        cursor: pointer;
    }
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

export const Title = styled.h3`
    font-size: 1.3em;
    margin: 0;
`

export const Intro = styled.h3`
    margin: 1em 0;
    font-size: 0.8em;
`
