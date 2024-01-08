import styled from 'styled-components';


export const ControlsWrapper=styled.div`
    width: 50%;
    margin: 0px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`

export const ActionBtn=styled.button`
    width: 50px;
    height: 50px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`
export const PlayPauseBtn=styled.button`
    width: 70px;
    height: 70px;
    border-radius: 40px;
    background-color: var(--theme-accent-color);
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    & :hover {
        transform: scale(1.1);
    }
`