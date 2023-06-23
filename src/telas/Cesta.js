import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>
            <View style={estilos.cesta}>
                <Text style={estilos.nome}>Cesta de Verduras</Text>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logo} />
                    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <Text style={estilos.descricao}>
                    Uma cesta com produtos selecionados
                    cuidadosamente da fazendo para
                    sua cozinha
                </Text>
                <Text style={estilos.preco}>
                    R$ 40,00
                </Text>
            </View>
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
        padding: 16,
        fontFamily:"MontserratBold"
    },
    cesta: {
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily:"MontserratBold"
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
        lineHeight: 26,
        fontFamily:"Montserrat"
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily:"Montserrat"
    },
    preco: {
        color: "#2a9f85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontFamily:"MontserratBold"
    }
});