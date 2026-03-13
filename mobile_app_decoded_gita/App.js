import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import VerseCard from './src/components/VerseCard';
import { reflectionPrompts, verses } from './src/data/gitaWisdom';

const tabs = ['Wisdom Feed', 'Reflection'];

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [search, setSearch] = useState('');

  const filteredVerses = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return verses;

    return verses.filter((verse) => {
      const searchable = `${verse.id} ${verse.title} ${verse.decoded}`.toLowerCase();
      return searchable.includes(keyword);
    });
  }, [search]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.heading}>Decoded Gita Wisdom</Text>
        <Text style={styles.subheading}>Practical guidance for modern daily life</Text>
      </View>

      <View style={styles.tabRow}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'Wisdom Feed' ? (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by verse, theme, or keyword"
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
          />
          <ScrollView contentContainerStyle={styles.scrollBody}>
            {filteredVerses.length ? (
              filteredVerses.map((verse) => <VerseCard key={verse.id} verse={verse} />)
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyTitle}>No wisdom card found</Text>
                <Text style={styles.emptyDescription}>
                  Try searching for words like action, mind, surrender, or calm.
                </Text>
              </View>
            )}
          </ScrollView>
        </>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollBody}>
          <View style={styles.card}>
            <Text style={styles.reflectionTitle}>Daily Reflection Prompts</Text>
            {reflectionPrompts.map((prompt, index) => (
              <Text key={prompt} style={styles.promptItem}>
                {index + 1}. {prompt}
              </Text>
            ))}
          </View>

          <View style={styles.card}>
            <Text style={styles.reflectionTitle}>Simple Routine (10 Minutes)</Text>
            <Text style={styles.promptItem}>1. Read one verse and decoded meaning.</Text>
            <Text style={styles.promptItem}>2. Sit quietly for 2 minutes and observe your thoughts.</Text>
            <Text style={styles.promptItem}>3. Pick one daily practice and commit to it today.</Text>
            <Text style={styles.promptItem}>4. Journal one sentence before sleep.</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827'
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8
  },
  heading: {
    fontSize: 27,
    color: '#f9fafb',
    fontWeight: '800'
  },
  subheading: {
    marginTop: 4,
    color: '#93c5fd',
    fontSize: 14
  },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginBottom: 12,
    gap: 8
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151',
    alignItems: 'center',
    backgroundColor: '#1f2937'
  },
  tabButtonActive: {
    backgroundColor: '#2563eb',
    borderColor: '#3b82f6'
  },
  tabText: {
    color: '#cbd5e1',
    fontWeight: '600'
  },
  tabTextActive: {
    color: '#ffffff'
  },
  searchInput: {
    marginHorizontal: 18,
    marginBottom: 12,
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15
  },
  scrollBody: {
    paddingHorizontal: 18,
    paddingBottom: 24
  },
  emptyState: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 16
  },
  emptyTitle: {
    color: '#f9fafb',
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 17
  },
  emptyDescription: {
    color: '#cbd5e1',
    lineHeight: 20
  },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#374151'
  },
  reflectionTitle: {
    color: '#f9fafb',
    fontWeight: '700',
    fontSize: 19,
    marginBottom: 10
  },
  promptItem: {
    color: '#e5e7eb',
    lineHeight: 22,
    marginBottom: 8,
    fontSize: 15
  }
});
