import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { HomeIcon, SearchIcon, UsersIcon } from './Icons'; // Assuming you have these icons in separate components

export default function Taskbar() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.link}>
            <HomeIcon />
            <Text style={styles.label}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <SearchIcon />
            <Text style={styles.label}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <UsersIcon />
            <Text style={styles.label}>Groups</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity as needed
  },
  container: {
    paddingHorizontal: 16,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  link: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
