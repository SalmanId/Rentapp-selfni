import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
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
const analytics = getAnalytics(app);
const auth = getAuth();
export function InscriptionScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  function handlelogin(){
    navigation.navigate('ConsommateurScreen');
  }
  function handleNextPress() {
    // Vérifier les données et effectuer des actions nécessaires
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    // Vérifier si l'adresse e-mail est déjà enregistrée
    // Simuler une vérification en utilisant une liste d'e-mails enregistrés
    createUserWithEmailAndPassword(auth, email, password)
      .then(function(userCredential) {
        // Enregistrement réussi, redirigez l'utilisateur vers la page souhaitée
        switch (route.params.userType) {
          case 'locateur':
            navigation.navigate('LocateurScreen');
            break;
          case 'consommateur':
            navigation.navigate('ConsommateurScreen');
            break;
          case 'visitor':
            navigation.navigate('ProductsList');
            break;
          default:
            navigation.navigate('UserTypeSelection');
            break; }
      })
      .catch(function(error) {
        // Une erreur s'est produite, affichez l'erreur à l'utilisateur
        var errorMessage = error.message;
        alert(errorMessage);
      });

    
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <MaterialIcons name="navigate-next" size={24} color="white" />
        <Text style={styles.buttonText}>S'inscrir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlelogin}>
        <MaterialIcons name="navigate-next" size={24} color="white" />
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2', // Couleur d'arrière-plan similaire à UserTypeSelection
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    width: '80%',
    height: 40,
    
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 50,
    
    backgroundColor: '#FFF', // Couleur de fond blanche
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    marginTop:15,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 16,
  },
});
