import styled from "styled-components";

type ContainerProps = {
    done:boolean
}

export const Container = styled.div(({done}:ContainerProps)=>(
    `
display: flex;
background-color: orange;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input {
    width: 25px;
    height: 25px;
    margin-right: 8px ;
}

label {
    color: white;
    font-weight: 700;
    text-decoration:${done ? 'line-through' : 'initial'} ;
    font-style: bold;
} 

`

))
