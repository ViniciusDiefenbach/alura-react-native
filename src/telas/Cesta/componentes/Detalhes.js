import React from 'react'
import Texto from '../../../componentes/Texto'
import { Image, StyleSheet, View } from 'react-native'
import Botao from '../../../componentes/Botao'

export default function Detalhes({ nome, descricao, preco, logoFazenda, nomeFazenda, botao }) {
    return (
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logoFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Botao style={estilos.botao} onPress={() => {}}>
                <Texto style={estilos.textoBotao}>
                    {botao}
                </Texto>
            </Botao>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        gap: 12
    },
    imagemFazenda: {
        height: 32,
        width: 32
    },
    nomeFazenda: {
        fontSize: 20,
        lineHeight: 26
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold"
    },
    botao: {
        marginTop: 12,
        backgroundColor: "#32af62"
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})