import React, { useState } from 'react';
import { Image,View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesnpm audit

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk5d4GhynzNL-7B1KeuxUW-cE-gYne2vY",
  authDomain: "vacataire-268b5.firebaseapp.com",
  projectId: "vacataire-268b5",
  storageBucket: "vacataire-268b5.appspot.com",
  messagingSenderId: "1060743800855",
  appId: "1:1060743800855:web:f6bcd3a40270c4c541d452",
  measurementId: "G-VDZRBNF4XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    
    // Récupérer l'instance d'authentification Firebase
const auth = getAuth();

export function ConsommateurScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleLogin() {
    const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Connexion réussie, rediriger vers l'écran des produits
          navigation.navigate('ProductsList');
        })
        .catch((error) => {
          // Afficher un message d'erreur ou effectuer une action appropriée en cas de connexion échouée
          console.log('Erreur de connexion:', error);
        });
  }


  

  

  return (
    <View style={styles.A}>
      <View style={[styles.AChild, styles.AChildPosition]} />
      <Image
        style={[
          styles.orangeECommerceDeliveryLog,
          styles.AChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={styles.AItem} >
      
      <Text style={styles.vousEtes}>Connectez vous !</Text>

      <TextInput
        style={styles.Email}
        placeholder="Email"
        placeholderTextColor="rgba(128, 128, 128, 0.7)"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.Password}
        placeholder="Password"
        placeholderTextColor="rgba(128, 128, 128, 0.7)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      

      <TouchableOpacity style={styles.Login} onPress={handleLogin}>
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>

      

      </View>  
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  AChildPosition: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  orangeECommerceDeliveryLog: {
    width: windowWidth ,
    height: '40%',
  },
  
  
  AChild: {
    backgroundColor: Color.lightPurple,
    width: '100%',
    height: windowHeight,
    left: 0,
    top: 0,
  },
  AItem: {
    top: (windowHeight * 330) / 844,
    left: 0,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomLeftRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: '100%',
    height: '60%',
    position: 'absolute',
    
  },
  vousEtes: {
    top: -50,
    left: (windowWidth * 106) / 393,
    fontSize: (windowHeight * 25) / 844,
    color: '#555',
    width: (windowWidth * 192) / 393,
    height: (windowHeight * 39) / 844,
    textAlign: 'left',
    fontFamily: FontFamily.latoBold,
    fontWeight: '700',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  Email: {
    left: '18%',
    marginTop:40,
    width: '65%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 16,
    paddingHorizontal: 10,

    fontSize: 16,
  },
  Password: {
    width: '65%',
    left: '18%',
       
    height: 40,
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontSize: 16,
  },
  
  
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  Login: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    height: 30,
    borderRadius: Border.br_50xl,  
    left: (windowWidth * 135) / 393,
    width: (windowWidth * 120) / 393,
    height: (windowHeight * 30) / 844,
    marginTop:180,
    position: 'absolute',
  },
  LoginText: {
    color: '#FFF',
    left: (windowWidth * 31) / 393,
    top: (windowHeight * -1) / 844,
    
    fontSize: 20,
    fontWeight: 'bold',
  },
  Search: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    height: 30,
    borderRadius: Border.br_50xl,  
    left: (windowWidth * 135) / 393,
    width: (windowWidth * 120) / 393,
    height: (windowHeight * 30) / 844,
    top: (windowHeight * 650) / 844,
    position: 'absolute',
  },
  SearchText: {
    color: '#FFF',
    left: (windowWidth * 29) / 393,
    top: (windowHeight * 3) / 844,
    
    fontSize: 20,
    fontWeight: 'bold',
  }
  ,A: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: windowHeight,
  },

});
