import React from 'react';
import { View, Text, SectionList, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

// Sample Data
const datasource = [
  {
    title: "Smartwatches",
    bgColor: '#e3f2fd',
    data: [
      {
        key: "Apple Watch Series 7",
        imageUrl: require('./img/applewatch1.jpg'),
      },
      {
        key: "Apple Watch Ultra",
        imageUrl: require('./img/applewatch2.jpg'),
      }
    ],
  },
  {
    title: "Fitness Bands",
    bgColor: '#f1f8e9',
    data: [
      {
        key: "Fitbit Charge 5",
        imageUrl: require('./img/applewatch1.jpg'),
      },
      {
        key: "Xiaomi Mi Band 7",
        imageUrl: require('./img/applewatch2.jpg'),
      }
    ],
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    padding: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    padding: 10,
    color: '#333',
  },
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.itemText}>{item.key}</Text>
      <Image source={item.imageUrl} style={styles.imageStyle} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            keyExtractor={(item, index) => item.key + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor } }) => (
                <Text style={[styles.sectionHeader, { backgroundColor: bgColor }]}>{title}</Text>
            )}
        />
      </View>
  );
};

export default App;

