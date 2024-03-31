import React, { FC, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {  Space } from 'antd';
import { PDFDownloadLink } from '@react-pdf/renderer'; 
import PdfDocument from '../../components/pdfDocument';
import * as S from './homeStyles'

interface IForm {
    name: string;
    email: string;
    review: string;
    rating: number;
    picture: string; 
}

const Home: FC = () => {
    const { handleSubmit, control, formState, reset } = useForm<IForm>({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            review: '',
            rating: 0,
            picture: '',
        },
    });
    const { errors } = formState;
    const [feedbackList, setFeedbackList] = useState<IForm[]>([]);

    const CustomSubmit: SubmitHandler<IForm> = (data) => {
        data.picture = data.picture ? URL.createObjectURL(data.picture[0]) : null;
        setFeedbackList((prevList) => [...prevList, data]);
        reset();
    };

  return (
    <div className="screen-container">
        <h1>Welcome to Spotify Clone</h1>
        <p>Sorry all tracks 30sec</p> 
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center', alignItems:'center'}}>
            <h2>Форма обратной связи</h2>
            <S.CustomForm layout="vertical" onFinish={handleSubmit(CustomSubmit)}>
                <S.CustomFormItem
                    label="Имя"
                    hasFeedback
                    validateStatus={errors.name ? 'error' : ''}
                    help={errors.name?.message}
                >
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) => <S.StyledInput {...field} />}
                />
                </S.CustomFormItem>
                <S.CustomFormItem
                    label="Email"
                    hasFeedback
                    validateStatus={errors.email ? 'error' : ''}
                    help={errors.email?.message}
                >
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательно',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Введите корректный адрес электронной почты',
                            },
                        }}
                        render={({ field }) => <S.StyledInput {...field} />}
                    />
                </S.CustomFormItem>
                <S.CustomFormItem
                    label="Отзыв"
                    hasFeedback
                    validateStatus={errors.review ? 'error' : ''}
                    help={errors.review?.message}
                >
                    <Controller
                        name="review"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Это поле обязательно' }}
                        render={({ field }) => <S.StyledTextArea {...field} />}
                    />
                </S.CustomFormItem>
                <S.CustomFormItem
                    label="Рейтинг"
                    hasFeedback
                    validateStatus={errors.rating ? 'error' : ''}
                    help={errors.rating?.message}
                >
                    <Controller
                        name="rating"
                        control={control}
                        defaultValue={0}
                        rules={{
                            required: 'Это поле обязательно',
                            min: { value: 1, message: 'Рейтинг должен быть от 1 до 5' },
                            max: { value: 5, message: 'Рейтинг должен быть от 1 до 5' },
                            validate: {
                                isInteger: (value) => Number.isInteger(Number(value)) || 'Рейтинг должен быть целым числом',
                            },
                        }}
                        render={({ field }) => <S.StyledInput type="number" {...field} />}
                    />
                </S.CustomFormItem>
                <S.CustomFormItem
                        label="Изображение"
                        help={errors.picture?.message}
                    >
                        <Controller
                            name="picture"
                            control={control}
                            defaultValue={''}
                            rules={{
                                required: 'Это поле обязательно',
                            }}
                            render={({ field }) => (
                                <input 
                                    type="file" 
                                    onChange={(e) => field.onChange(e.target.files)}
                                />
                            )}
                        />
                    </S.CustomFormItem>
                <S.CustomFormItem>
                    <S.CustomButton type="primary" htmlType="submit" disabled={!formState.isValid}>
                    Отправить
                    </S.CustomButton>
                </S.CustomFormItem>
            </S.CustomForm>

            <div>
                <PDFDownloadLink
                    document={
                        <PdfDocument {...feedbackList[0]} />
                    }
                    fileName="feedback.pdf"
                    >
                    {({ blob, url, loading, error }) =>
                        loading ? 'Загрузка документа...' : 'Скачать отзывы в PDF'
                    }
                </PDFDownloadLink>
                <h3>Список отзывов:</h3>
                <Space direction="vertical" size="middle">
                    {feedbackList.map((item, index) => (
                    <S.FeedbackCard key={index}>
                        <p>Имя: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Отзыв: {item.review}</p>
                        <p>Рейтинг: {item.rating}</p>
                        <S.FeedbackImage src={item.picture} alt="picture" />
                    </S.FeedbackCard>
                    ))}
                </Space>
            </div>
        </Space>
    </div>
  );
};

export default Home;
