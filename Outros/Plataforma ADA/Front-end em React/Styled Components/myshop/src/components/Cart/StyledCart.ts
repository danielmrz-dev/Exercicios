import styled from "styled-components";

interface ContainerProps {
    showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? "0" : "-350px"};
    width: 350px;
    transition: right .3s ease;
    background-color: white;
    height: 100vh;
    padding: 2rem;
    box-shadow: 0 0 15px rgba(0,0,0,0.25);
`

export const Title = styled.h1`
    /* color: white; */
`