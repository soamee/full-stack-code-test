import styled from "styled-components"

export const CardBook = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid black;
padding: 3em;
margin: 4em 0;
:visited,
:hover {
    border: 2px solid red;
    color: red;
}
`

