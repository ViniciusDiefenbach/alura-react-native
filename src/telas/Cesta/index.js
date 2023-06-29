import React from 'react'
import Topo from "./componentes/Topo"
import Detalhes from './componentes/Detalhes'
import { ScrollView, StyleSheet, View } from 'react-native'
import Itens from './componentes/Itens'

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <ScrollView>
            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Itens {...itens} />
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 20,
        paddingHorizontal: 16
    }
})