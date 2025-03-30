import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Amanda</Text>
        <Text style={styles.dateText}>Tue, 07 June 2022</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://example.com/profile.jpg' }} style={styles.profileImage} />
        <Text style={styles.profileName}>Alexa Rawles</Text>
        <Text style={styles.profileEmail}>alexarawles@gmail.com</Text>
        <View style={styles.editButton}>
          <Button title="Edit" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Nick Name" style={styles.input} />
        <TextInput placeholder="Gender" style={styles.input} />
        <TextInput placeholder="Country" style={styles.input} />
        <TextInput placeholder="Language" style={styles.input} />
        <TextInput placeholder="Time Zone" style={styles.input} />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>My email Address</Text>
        <Text style={styles.emailText}>alexarawles@gmail.com</Text>
        <Text style={styles.emailDate}>1 month ago</Text>
        <View style={styles.addButton}>
          <Button title="+Add Email Address" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    color: '#888',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
  },
  editButton: {
    marginTop: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
  },
  emailDate: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    marginTop: 10,
  },
});

export default Profile;