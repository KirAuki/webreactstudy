import styled from 'styled-components';
import { Form, Input, Button, Card, Space } from 'antd';


export const CustomForm = styled(Form)`
    width: 400px;
`;

export const CustomFormItem = styled(Form.Item)`
    width: 100%;
    margin-bottom: 16px;
    & .ant-form-item-label >label {
        color: var(--theme-first-color);
    }
    
`;

export const StyledInput = styled(Input)`
    background-color: var(--theme-bg);
    & .ant-input {
        color: var(--theme-first-color);
        background-color: transparent;
    }
`;

export const StyledTextArea = styled(Input.TextArea)`
    background-color: var(--theme-bg);
    & .ant-input {
        color: var(--theme-first-color);
        background-color: transparent;
    }
`;


export const FeedbackCard = styled(Card)`
    width: 400px;
    background: var(--theme-bg);
    color: var(--theme-first-color);
`;

export const FeedbackImage = styled.img`
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
`;

export const CustomButton = styled(Button)`
    box-shadow: none;
`;