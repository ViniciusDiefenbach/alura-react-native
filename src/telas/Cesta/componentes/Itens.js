import React from "react"
import Texto from "../../../componentes/Texto"
import { Image, StyleSheet, View } from "react-native"

export default function Itens({ titulo, lista }) {
    return (
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            {lista.map((item) => {
                return (
                    <View key={item.nome} style={estilos.item}>
                        <Image source={item.imagem} style={estilos.imagem} />
                        <Texto style={estilos.nome}>{item.nome}</Texto>
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
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    }
})