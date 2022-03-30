import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetPoint, IconEkspress, IconKarpet, IconKiloan, IconSatuan, IconSetrika, IconVip } from "../../assets";
import { back_color } from "../../utils/constant";
import { useFonts } from 'expo-font';

const ButtonIcon = ({title, type}) => {

    const [loaded] = useFonts({
        TitilliumWebRegular: require('../../assets/font/TitilliumWeb-Regular.ttf'),
        TitilliumWebBold: require('../../assets/font/TitilliumWeb-Bold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    const Icon = () => {
        if(title === "Add Saldo") return <IconAddSaldo />

        if(title === "Get Point") return <IconGetPoint />

        if(title === "Kiloan") return <IconKiloan />
        
        if(title === "Satuan") return <IconSatuan />
        
        if(title === "VIP") return <IconVip />
        
        if(title === "Karpet") return <IconKarpet />
        
        if(title === "Setrika") return <IconSetrika />
        
        if(title === "Ekspress") return <IconEkspress />

        return <IconAddSaldo/>
    }

    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.icon(type)}>
                <Icon />
            </View>
            <Text style={[styles.text(type), {fontFamily: 'TitilliumWebRegular'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        justifyContent: type === "layanan" ? 'space-between' : 'center', 
        alignItems:'center',
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 10 : 0,
    }),
    icon: (type) => ({
        backgroundColor: back_color,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        alignItems: 'center'
    })
})