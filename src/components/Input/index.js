import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #B7B7B7;
    background: transparent;
    border: 1px solid #B7B7B7;
    padding: 15px 200px;
    border-radius: 50px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    font-family: "Nunito", serif;

    &::placeholder {
        text-align: center;
        color: #B7B7B7;
        font-size: 18px;
    }
`

export default Input;