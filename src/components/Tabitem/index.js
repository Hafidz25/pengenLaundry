import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {IconAkun, IconAkunActive,IconHome, IconHomeActive, IconPesanan, IconPesananActive} from '../../assets'
import React from 'react'
import { primary_color, second_color } from "../../utils/constant";

const Tabitem = ({isFocused, onPress, onLongPress, label}) => {

    const Icon = () => {
        if(label === 'Home') return isFocused ? <IconHomeActive/> : <IconHome/>

        if(label === 'Pesanan') return isFocused ? <IconPesananActive/> : <IconPesanan/>

        if(label === 'Akun') return isFocused ? <IconAkunActive/> : <IconAkun/>
        
        return <IconHome />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Tabitem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? primary_color : second_color,
        marginTop: 1
    })
})