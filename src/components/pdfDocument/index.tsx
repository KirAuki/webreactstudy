import React, { FC } from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 10,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    picture: {
        width:'150px',
        height:'150px',
        objectFit:'cover'
    }
});

interface IDocument {
  name: string;
  email: string;
  review: string;
  rating: number;
  picture: string | null;
}

const PdfDocument: FC<IDocument> = ({ name, email, review, rating, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>Name: {name}</Text>
        </View>
        <View style={styles.section}>
          <Text>Email: {email}</Text>
        </View>
        <View style={styles.section}>
          <Text>Review: {review}</Text>
        </View>
        <View style={styles.section}>
          <Text>Rating: {rating}</Text>
        </View>
        <View style={styles.section}>
          {picture && <Image src={picture}  style={styles.picture}/>}
        </View>
      </Page>
    </Document>
  )
}

export default PdfDocument;