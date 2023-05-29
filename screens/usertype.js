import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground ,Dimensions } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export function usertype ({  }) {
  const navigation = useNavigation();

  function handleConsommateurPress() {
    navigation.navigate('ConsommateurScreen');
  }
  return (
    <View style={styles.iphone147}>
      <View style={[styles.iphone147Child, styles.iphone147ChildPosition]} />
      <View style={styles.iphone147Item} />
      <Text style={styles.vousEtes}>Vous etes ?</Text>
      <Image
        style={styles.iphone147Inner}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <TouchableOpacity style={styles.rectangleIconLayout}  onPress={handleConsommateurPress}>
      <Text style={[styles.consommateur, styles.vendeurTypo]}>
        Consommateur
      </Text>
        </TouchableOpacity>
        
      <Image
        style={[
          styles.orangeECommerceDeliveryLog,
          styles.iphone147ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/orange-ecommerce-delivery-logo-template-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.vendeur, styles.vendeurPosition]}>Vendeur</Text>
      <Image
        style={[styles.iphone147Child1, styles.vendeurPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  iphone147ChildPosition: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  vendeurTypo: {
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    fontFamily: FontFamily.latoBold,
    fontWeight: '700',
  },
  rectangleIconLayout: {
    height: 30,
    borderRadius: Border.br_50xl,
  },
  vendeurPosition: {
    top: (windowHeight * 656) / 844,
    position: 'absolute',
  },
  iphone147Child: {
    backgroundColor: Color.lightPurple,
    width: (windowWidth * 390) / 393,
    height: windowHeight,
  },
  iphone147Item: {
    top: (windowHeight * 433) / 844,
    left: -1,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomLeftRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: (windowWidth * 393) / 393,
    height: (windowHeight * 411) / 844,
    position: 'absolute',
  },
  vousEtes: {
    top: (windowHeight * 383) / 844,
    left: (windowWidth * 106) / 393,
    fontSize: (windowHeight * 36) / 844,
    color: '#555',
    width: (windowWidth * 192) / 393,
    height: (windowHeight * 39) / 844,
    textAlign: 'left',
    fontFamily: FontFamily.latoBold,
    fontWeight: '700',
    position: 'absolute',
  },
  iphone147Inner: {
    top: (windowHeight * 548) / 844,
    left: (windowWidth * 54) / 393,
    borderRadius: Border.br_31xl,
    width: (windowWidth * 284) / 393,
    height: (windowHeight * 171) / 844,
    position: 'absolute',
  },
  consommateur: {
    left: (windowWidth * 113) / 393,
    width: (windowWidth * 164) / 393,
    height: (windowHeight * 21) / 844,
    top: (windowHeight * 577) / 844,
    position: 'absolute',
  },
  orangeECommerceDeliveryLog: {
    width: (windowWidth * 388) / 393,
    height: (windowHeight * 388) / 844,
  },
  rectangleIcon: {
    left: (windowWidth * 105) / 393,
    width: (windowWidth * 181) / 393,
    top: (windowHeight * 577) / 844,
    position: 'absolute',
  },
  vendeur: {
    left: (windowWidth * 150) / 393,
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: 'left',
    fontFamily: FontFamily.latoBold,
    fontWeight: '700',
  },
  iphone147Child1: {
    left: (windowWidth * 135) / 393,
    width: (windowWidth * 121) / 393,
    height: (windowHeight * 30) / 844,
    borderRadius: Border.br_50xl,
  },
  iphone147: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: windowHeight,
  },
});

export default usertype;