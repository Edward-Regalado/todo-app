import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: lightsalmon; */
    width: 80%;
    /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1); */
    /* border: 2px solid black; */
`;

export const ButtonDelete = styled.button`
    background-color: red;
    border-radius: 15px;
    border: none;
    margin-top: 10px;
    /* width: 30px; */
    /* height: 20px; */
    `;

export const ButtonComplete = styled.button`
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    border-radius: 15px;
    border: none;
    /* width: 30px; */
    /* height: 15px; */
`;

export const ButtonFalse = styled.button`
    /* background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%); */
    background-color: red;
    border-radius: 15px;
    border: none;
    /* width: 30px; */
    /* height: 15px; */
`;