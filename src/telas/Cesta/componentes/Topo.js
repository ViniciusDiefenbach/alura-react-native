import React from 'react';
import topo from "../../../../assets/topo.png";
import { Dimensions, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get("screen").width;

export default function Topo() {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        height: 578 / 768 * width,
        width: "100%"
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        padding: 16,
        fontWeight: "bold"
    }
});