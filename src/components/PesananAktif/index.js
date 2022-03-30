import { StyleSheet, Text, View , TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { IconPesananAktif } from "../../assets";
import { useFonts } from 'expo-font';
import { gray, primary_color, warning_color } from '../../utils/constant';

const PesananAktif = ({title, status}) => {

    const [loaded] = useFonts({
        TitilliumWebRegular: require('../../assets/font/TitilliumWeb-Regular.ttf'),
        TitilliumWebBold: require('../../assets/font/TitilliumWeb-Bold.ttf'),
        TitilliumWebSemiBold: require('../../assets/font/TitilliumWeb-SemiBold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    return (
        <TouchableOpacity style={styles.container}>
            <IconPesananAktif />
            <View style={styles.text}>
                <Text style={[styles.title, {fontFamily: 'TitilliumWebSemiBold'}]}>{title}</Text>
                <Text style={[styles.status(status), {fontFamily: 'TitilliumWebRegular'}]}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 18,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight*0.015,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth*0.04
    },
    title: {
        fontSize: 18
    },
    status: (status) => ({
        fontSize: 14,
        color: status === "Sudah Selesai" ? primary_color : status === "Masih Dicuci" ? warning_color : gray
    })
})