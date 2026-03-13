import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VerseCard({ verse }) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Verse {verse.id}</Text>
      <Text style={styles.title}>{verse.title}</Text>
      <Text style={styles.sanskrit}>{verse.sanskrit}</Text>
      <Text style={styles.sectionLabel}>Decoded Wisdom</Text>
      <Text style={styles.description}>{verse.decoded}</Text>
      <Text style={styles.sectionLabel}>Daily Practice</Text>
      <Text style={styles.description}>{verse.dailyPractice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#374151'
  },
  id: {
    color: '#fbbf24',
    fontSize: 13,
    marginBottom: 4,
    fontWeight: '600'
  },
  title: {
    color: '#f9fafb',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8
  },
  sanskrit: {
    color: '#cbd5e1',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 12
  },
  sectionLabel: {
    color: '#93c5fd',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
    marginBottom: 4
  },
  description: {
    color: '#e5e7eb',
    lineHeight: 21,
    fontSize: 15
  }
});
