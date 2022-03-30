import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { primary_color, second_color } from "../../utils/constant";
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {

    const [loaded] = useFonts({
        TitilliumWebRegular: require('../../assets/font/TitilliumWeb-Regular.ttf'),
        TitilliumWebBold: require('../../assets/font/TitilliumWeb-Bold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.container}>
        <View style={styles.infoSaldo}>
            <View style={styles.text}>
                <Text style={[styles.labelSaldo, {fontFamily: 'TitilliumWebRegular'}]}>Saldo :</Text>
                <Text style={[styles.valueSaldo, {fontFamily: 'TitilliumWebBold'}]}>Rp. 100.000</Text>
            </View>
            <View style={styles.text}>
                <Text style={[styles.labelPoint, {fontFamily: 'TitilliumWebRegular'}]}>Pengen Point :</Text>
                <Text style={[styles.valuePoint, {fontFamily: 'TitilliumWebBold'}]}>100 Pont</Text>
            </View>
        </View>
        <View style={styles.btnAksi}>
            <ButtonIcon title="Add Saldo" />
            <Gap width={10} />
            <ButtonIcon title="Get Point" />
        </View>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeight*0.05,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoSaldo: {
        width: '60%'
    },
    labelSaldo: {
        fontSize: 20
    },
    valueSaldo: {
        fontSize: 20
    },
    labelPoint: {
        fontSize: 12
    },
    valuePoint: {
        fontSize: 12,
        color: primary_color
    },
    btnAksi: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})