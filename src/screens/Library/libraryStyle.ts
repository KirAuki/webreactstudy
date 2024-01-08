import styled from 'styled-components'
import { Card,Pagination } from 'antd';


export const CustomPagination = styled(Pagination)`
    
    .ant-pagination-item a{
            color: var(--theme-first-color);
            &:hover {
            color: var(--theme-accent-color);
        }
    }

    .ant-pagination-prev button, .ant-pagination-next button {
        color: var(--theme-first-color);
    }
    .ant-pagination-item-active{
        border: 1px solid transparent;
        border-radius: 30%;
        background-color: transparent;
    }
    .ant-pagination-item-active a {
        color: var(--theme-first-color);
        background-color: var(--theme-accent-color) ;
        border-radius: 30%;
        border-color: transparent;
        &:hover {
            color: var(--theme-first-color);
        }
    }
`;

export const CustomCard = styled(Card)`
    && {
        background-color: var(--theme-bg); // Set the background color to black
        cursor: pointer;
        
        .ant-card-head-title {
            color: var(--theme-first-color); // Set the title text color: ;
        }
        &:hover {
            border-color: var(--theme-accent-color); // Change border color on hover
        }

        img {
            width: 100% ;
            height: auto ;
            object-fit: cover;
        }

        p {
            color: var(--theme-first-color); // Set the text color inside the Card
        }
    }
`;
