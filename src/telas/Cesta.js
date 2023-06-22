import { Dimensions, Image, StyleSheet, Text } from "react-native";

import topo from "../../assets/topo.png"

const width = Dimensions.get("screen").width;

export default function Cesta() {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        height: 578 / 768 * width,
        width: "100%"
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});