import React from 'react'
import Topo from "./componentes/Topo"
import Detalhes from './componentes/Detalhes'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import Item from './componentes/Item'
import Texto from '../../componentes/Texto'

export default function Cesta({ topo, detalhes, itens: { titulo, lista } }) {
    return (
        <ScrollView>

            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{titulo}</Texto>
                <FlatList
                    data={lista}
                    renderItem={Item}
                    keyExtractor={({ nome }) => nome}
                />
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 20,
        paddingHorizontal: 16
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