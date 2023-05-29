import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions} from 'react-native';
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
export function UserTypeSelection({ navigation }) {
  const [isRegistered, setIsRegistered] = useState(false);

  function handleLocateurPress() {
    if (isRegistered) {
      navigation.navigate('LocateurScreen');
    } else {
      navigation.navigate('LocateurScreen', { userType: 'locateur' });
    }
  }

  function handleConsommateurPress() {
    if (isRegistered) {
      navigation.navigate('ConsommateurScreen');
    } else {
      navigation.navigate('InscriptionScreen', { userType: 'consommateur' });
    }
  }

  function handleVisitorPress() {
    if (isRegistered) {
      navigation.navigate('ProductsList');
    } else {
      // Si l'utilisateur n'est pas enregistré, il sera redirigé vers la page "ProductsList"
      navigation.navigate('ProductsList');
    }
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
        <Text style={styles.title}>Choisissez :</Text>
        <TouchableOpacity style={styles.Locateur} onPress={handleLocateurPress}>
          <Text style={styles.LocateurText}>Locateur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Consommateur} onPress={handleConsommateurPress}>
          <Text style={styles.ConsommateurText}>Consommateur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.visiteur} onPress={handleVisitorPress}>
          <Text style={styles.visiteurText}>Continuer en tant que visiteur</Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    left: (windowWidth * 106) / 393,
    fontSize: 40,
    color: '#555',
    width: (windowWidth * 192) / 393,
    height: (windowHeight * 39) / 844,
    textAlign: 'center',
    top:-50,
    left:'25%',
    
    fontWeight: '700',
    position: 'absolute',
  },
  Consommateur: {
    backgroundColor: '#F9CBB5',
    borderRadius: 50,
    marginTop:20,
    left: '30%',
    width: 180,
    height: 45,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  Locateur: {
    backgroundColor: '#D7DDFD',
    borderRadius: 50,
    marginTop:60,
    left: '30%',
    width: 180,
    height: 45,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  visiteur: {
    
    borderRadius: 8,
    marginTop:0,
    left: '10%',
    
    height: 45,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  LocateurText: {
    left:20,
    color: '#555555',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ConsommateurText: {
    color: '#744601',
    fontSize: 18,
    fontWeight: 'bold',
  },
  visiteurText: {
    left:35,
    color: '#2196F3',
    fontSize: 15,
    fontWeight: 'bold',
  },
  A: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: windowHeight,
  },
});
