import React from 'react'
import Topo from "./componentes/Topo"
import Detalhes from './componentes/Detalhes'
import { FlatList, StyleSheet, View } from 'react-native'
import Item from './componentes/Item'
import Texto from '../../componentes/Texto'

export default function Cesta({ topo, detalhes, itens: { titulo, lista } }) {
    return (
        <FlatList
            data={lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{titulo}</Texto>
                    </View>
                </>
            }}
        />
    )
}

const estilos = StyleSheet.create({
    cesta: {
        padding: 16
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 16,
        fontSize: 24,
        lineHeight: 32
    }
})