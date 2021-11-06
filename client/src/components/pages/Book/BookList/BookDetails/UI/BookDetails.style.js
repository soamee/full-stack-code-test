import styled from "styled-components";


export const CardItem = styled.div`
display:flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid #326173;
border-radius: 6px;
padding: 3em;
margin: 5em; 
background-color: #fff;
object-fit: content;    



h2 {

    padding: 0.5em;
}

span {
    font-size: 1.5rem;
    font-family: Kameron;
    padding: 1em;
}

p {
    font-size: 1.5rem; 
}

div {
    padding: 0.5em;  
}

.btn-edit {
    
    border-radius: 4px;
    margin: 2em;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    background-color: #2ABF6B;
    color: #fff;
    :hover{
        background-color: #668C4A;  
    }  
    }

    .btn-back {
    
    border-radius: 4px;
    margin: 2em;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    background-color: #6D96A6;
    color: #fff;
    :hover{
        background-color: #326173;  
    }  
    }

`

export const EditContainer = styled.div`
display: flex;
justify-content: space-evenly;
border: 2px solid #B1B1AC;
box-shadow: 2px 4px #B1B1AC;
align-items: center;
flex-wrap: wrap;
`
