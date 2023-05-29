import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { Alert } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


//import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
  
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCk5d4GhynzNL-7B1KeuxUW-cE-gYne2vY",
  authDomain: "vacataire-268b5.firebaseapp.com",
  projectId: "vacataire-268b5",
  storageBucket: "vacataire-268b5.appspot.com",
  messagingSenderId: "1060743800855",
  appId: "1:1060743800855:web:f6bcd3a40270c4c541d452",
  measurementId: "G-VDZRBNF4XN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function LocateurScreen() {

  const [titreProduit, setTitreProduit] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, settel] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  
  function handleSave() {
    
    addDoc(collection(db, 'produits'), {
      Titre: titreProduit,
      Prix: prix,
      Description: description,
      nom: nom,
      email: email,
      telephone: tel,
      lien: 'gs://vacataire-268b5.appspot.com/2887461-4-_1.webp',
      // Ajoutez d'autres champs si nécessaire
    })
      .then(() => {
        console.log('Product saved successfully!');
        Alert.alert('Succès', 'Produit ajouté avec succès', [{ text: 'OK' }]);
        setTitreProduit('');
        setPrix('');
        setDescription('');
        setNom('');
        setEmail('');
        settel('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du produit :', error);
      });
  }

  function handlePhotoSelection() {
  const options = {
    title: 'Select Photos',
    mediaType: 'photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
  };

  
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veuillez remplir ces champs</Text>
      
       
    
      
      <TextInput
        style={styles.input}
        placeholder="Votre nom..."
        placeholderTextColor="gray"
        value={nom}
        onChangeText={setNom}
      />

      <TextInput
        style={styles.input}
        placeholder="Votre email..."
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Votre telephone..."
        placeholderTextColor="gray"
        value={tel}
        onChangeText={settel}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Titre du produit"
        placeholderTextColor="gray"
        value={titreProduit}
        onChangeText={setTitreProduit}
      />

      <TextInput
        style={styles.input}
        placeholder="Prix"
        placeholderTextColor="gray"
        value={prix}
        onChangeText={setPrix}
      />

      <TextInput
        style={[styles.des, styles.textarea]}
        placeholder="Description"
        placeholderTextColor="gray"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Select Photos</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 2,
    marginTop:10,
    borderColor: '#555555',
    borderRadius: 50, // Ajout des bordures arrondies
    backgroundColor: '#FFF', // Couleur de fond blanche
    paddingHorizontal: 10,
  },
  des: {
    width: '88%',
    height: 40,
    borderWidth: 2,
    marginTop:10,
    borderColor: '#555555',
    borderRadius: 8, // Ajout des bordures arrondies
    backgroundColor: '#FFF', // Couleur de fond blanche
    paddingHorizontal: 10,
  },
  textarea: {
    height: 80,
  },
  button: {
    width: 120,
    
    backgroundColor: '#2196F3',
    borderRadius: 40,
    marginTop:10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    
    fontSize: 18,
    fontWeight: 'bold',
  },
});
