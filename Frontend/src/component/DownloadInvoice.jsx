import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
});

// Create Document Component
const InvoiceDocument = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Invoice</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Invoice Number:</Text>
        <Text>{invoice.number}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Date:</Text>
        <Text>{invoice.date}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Customer Name:</Text>
        <Text>{invoice.customerName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Items:</Text>
        {invoice.items.map((item, index) => (
          <Text key={index} style={styles.text}>
            {item.description} - ${item.amount}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Total Amount:</Text>
        <Text>${invoice.totalAmount}</Text>
      </View>
    </Page>
  </Document>
);

const DownloadInvoice = () => {
  const invoice = {
    number: 'INV-001',
    date: '2024-08-13',
    customerName: 'John Doe',
    items: [
      { description: 'Item 1', amount: 50 },
      { description: 'Item 2', amount: 75 },
      { description: 'Item 3', amount: 100 },
    ],
    totalAmount: 225,
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Download Invoice</h1>
        <PDFDownloadLink
          document={<InvoiceDocument invoice={invoice} />}
          fileName="invoice.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : 'Download Invoice'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default DownloadInvoice;
