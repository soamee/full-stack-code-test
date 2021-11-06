import styled from "styled-components"

export const Border = styled.div`
display: flex;
justify-content: center;
flex-direction: wrap;
border: 2px solid #326173;
border-radius: 12px;
margin: 10vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
background-color: #6D96A6;

a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 2em;
    
}
h1 {
    margin: auto;
}
:hover{
background-color: #326173;
}
a:hover{
    color:#C1D4D9;

}
`