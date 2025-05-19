import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.contaner}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>One</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  contaner: {
    padding: 8,
  },
  card: {},
  elevatedCard: {
    width: 100,
    height: 100,
    margin: 8,
    backgroundColor: '#FF00FF',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
