import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from "../../assets";
import { useFonts } from 'expo-font';
import {Saldo, ButtonIcon, PesananAktif} from '../../components/';
import { gray } from '../../utils/constant';





const Home = () => {

  const [loaded] = useFonts({
    TitilliumWebRegular: require('../../assets/font/TitilliumWeb-Regular.ttf'),
    TitilliumWebBold: require('../../assets/font/TitilliumWeb-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.page}>
      <ScrollView showVerticalScrollIdicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={{fontFamily: 'TitilliumWebRegular', fontSize:24}}>Selamat Datang, </Text>
            <Text style={{fontFamily: 'TitilliumWebBold', fontSize:22}}>Hapidd</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={[styles.label, {fontFamily: 'TitilliumWebBold'}]}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={[styles.label, {fontFamily: 'TitilliumWebBold'}]}>Pesanan Aktif</Text>
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No. 0002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No. 0002142" status="Sudah Selesai" />
        </View>
      </ScrollView>
      
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    height: windowHeight*0.28,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth*0.31,
    height: windowHeight*0.06,
    marginTop: windowHeight*0.02
  },
  hello: {
    marginTop: windowHeight*0.03
  },
  selamat: {
    fontSize: 24,
  
  },
  username: {
    fontSize: 22
    
  },
  layanan: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  label: {
    fontSize: 18
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 14,
    paddingHorizontal: 30,
    backgroundColor: gray,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  }
})