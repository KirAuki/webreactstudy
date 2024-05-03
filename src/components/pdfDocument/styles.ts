import { StyleSheet } from "@react-pdf/renderer";


export const styles = StyleSheet.create({
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
      width: "150px",
      height: "150px",
      objectFit: "cover",
    },
  });