import { FlatList, StyleSheet, View } from 'react-native'
import HomePageCard from './HomePageCard'
import DATA from '../data/CardData'

export default function HomePage() {

    return (
        <>
            <View style={styles.homePageContainer}>
                <FlatList data={DATA} renderItem={(itemData) => <HomePageCard item={itemData.item} />} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 18
    }
})