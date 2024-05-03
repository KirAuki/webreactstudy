import React from "react";
import * as S from "./loaderStyle";

const Loader: React.FC = () => {
  return (
    <S.LoaderWrapper>
      <S.LoaderCircle></S.LoaderCircle>
      <S.LoaderCircle></S.LoaderCircle>
      <S.LoaderCircle></S.LoaderCircle>
      <S.LoaderCircle></S.LoaderCircle>
    </S.LoaderWrapper>
  );
};

export default Loader;
