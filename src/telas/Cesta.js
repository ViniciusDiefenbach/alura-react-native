import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Texto from '../componentes/Texto'
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logo} />
                    <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
                </View>
                <Texto style={estilos.descricao}>
                    Uma cesta com produtos selecionados
                    cuidadosamente da fazendo para
                    sua cozinha
                </Texto>
                <Texto style={estilos.preco}>
                    R$ 40,00
                </Texto>
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
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        padding: 16,
        fontWeight: "bold"
    },
    cesta: {
        paddingVertical: 20,
        paddingHorizontal: 16
    },
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