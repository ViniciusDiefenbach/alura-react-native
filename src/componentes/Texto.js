import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto({ children, style }) {
    let estilo = estilos.texto;
    if (style?.fontWeight === "bold") {
        style.fontWeight = "normal"
        estilo = estilos.textoNegrito;
    }

    return (
        <Text style={[estilo, style]}>{children}</Text>
    );
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "Montserrat"
    }, 
    textoNegrito: {
        fontFamily: "MontserratBold"
    }
})