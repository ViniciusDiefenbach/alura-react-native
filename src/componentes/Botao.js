import React from "react"
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Botao({ children, style, onPress }) {
    return (
        <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#32af62",
        borderRadius: 4,
        paddingVertical: 12,
    },
})