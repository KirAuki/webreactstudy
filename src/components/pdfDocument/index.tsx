import { FC } from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";
import * as S from "./styles";
import { IDocument } from "./types";

const PdfDocument: FC<IDocument> = ({ name, email, review, rating, picture }) => {
  return (
    <Document>
      <Page size="A4" style={S.styles.page} wrap>
        <View style={S.styles.section}>
          <Text>Name: {name}</Text>
        </View>
        <View style={S.styles.section}>
          <Text>Email: {email}</Text>
        </View>
        <View style={S.styles.section}>
          <Text>Review: {review}</Text>
        </View>
        <View style={S.styles.section}>
          <Text>Rating: {rating}</Text>
        </View>
        <View style={S.styles.section}>{picture && <Image src={picture} style={S.styles.picture} />}</View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
