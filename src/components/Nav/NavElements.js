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

export const ButtonContainer = styled.div`
    width: 50%;
    margin-right: 390px;
    /* border: 2px solid black; */
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    text-align: center;
`;

export const LightButton = styled.button`
    /* width: 50px; */
    /* height: 30px; */
    background-color: black;
    color: white;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    /* padding: 10px, 30px; */
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        transform: scale(1.1);
    }
`;

export const DarkButton = styled.button`
    background-color: #d4d1d1;
    color: black;
    border: none;
    border-radius: 15px;
    margin-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        transform: scale(1.1);
    }
`;