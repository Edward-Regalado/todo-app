import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #0093E9; */
    /* background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); */
    width: 100%;
    height: 10vh;
    /* border: 2px solid black; */
`;

export const LightButton = styled.button`
    /* width: 50px; */
    /* height: 30px; */
    background-color: white;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    padding: 10px, 30px;
`;

export const DarkButton = styled.button`
    background-color: black;
    color: #FFF;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    padding: 10px, 30px;
`;