import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    border-bottom: 3px solid #d7001e;
`

export const Menu = styled.ul`
    margin: 0 auto;
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding: 0.7em 0; 
`

export const Item = styled.li`
    list-style-type: none;
    
    &:hover {
        cursor: pointer;
        background-color: #d7001e;
        color: black;
    }
`