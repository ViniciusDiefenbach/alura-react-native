import React from "react"
import Texto from "../../../componentes/Texto"
import { Image, StyleSheet, View } from "react-native"

export default function Itens({ titulo, lista }) {
    return (
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            {lista.map((item) => {
                return (
                    <View key={item.nome}>
                        <Image source={item.imagem} />
                        <Texto>{item.nome}</Texto>
                    </View>
                )
            })}
        </>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 16,
        fontSize: 24,
        lineHeight: 32
    }
})