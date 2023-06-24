import React from 'react';
import Texto from '../../../componentes/Texto'
import logo from "../../../../assets/logo.png";
import { Image, StyleSheet, View } from 'react-native';

export default function Detalhes({ nome, fazenda, descricao, preco }) {
    let { nomeFazenda, logoFazenda } = fazenda;
    return (
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logoFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
        </>
    );
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
    }
});