import React from 'react'
import { SafeAreaView, StatusBar, Image, FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { images, colors, perfectSize } from '../theme'
export default function Home({ navigation }) {
    const movies = [
        {
            name: 'Avengers: Endgame',
            image: images.avengers,
            year: '2019',
            stats: '3h 2m',
            details: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
            genres: ['Action','Sci-fi']
        },
        {
            name: 'Deadpool',
            image: images.deadpool,
            year: '2016',
            stats: '1h 49m',
            details: 'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.',
            genres: ['Action','Comedy']

        },
        {
            name: 'Beauty and The Beast',
            image: images.beauty,
            year: '2017',
            stats: '2h 19m',
            details: 'Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.',
            genres: ['Musical','Romance']

        },
        {
            name: 'Contratiemop',
            image: images.contratiempo,
            year: '2016',
            stats: '1h 46m',
            details: 'A young businessman wakes up in a locked hotel room next to the body of his dead lover. He hires a prestigious lawyer to defend him, and over the course of one night, they work together to find out what happened.',
            genres: ['Thriller','Mystery']

        }
    ]

    const series = [
        {
            name: 'Suits',
            image: images.suits,
            year: '2011',
            stats: '9 Seasons',
            details: `Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret.`,
            genres: ['Drama','Comedy']

        },
        {
            name: 'You',
            image: images.you,
            year: '2012',
            stats: '2 Seasons',
            details: `What would you do for love? For a brilliant male bookstore manager who crosses paths with an aspiring female writer, this question is put to the test. A charming yet awkward crush becomes something even more sinister when the writer becomes the manager's obsession. Using social media and the internet, he uses every tool at his disposal to become close to her, even going so far as to remove any obstacle --including people -- that stands in his way of getting to her.`,
            genres: ['Thriller','Romance']

        },
        {
            name: 'Dark',
            image: images.dark,
            year: '2017',
            stats: '3 Seasons',
            details: `When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. "Dark" represents the first German original series produced for Netflix.`,
            genres: ['Mystery','Drama']

        },
        {
            name: 'Money Heist',
            image: images.money,
            year: '2017',
            stats: '4 Seasons',
            details: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.',
            genres: ['Crime','Thriller']
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle='light-content' />

            <View style={styles.header}>
                <Image source={images.menuIcon} style={styles.headerIcon} />
                <Text style={styles.title}>Movie App UI</Text>
                <Image source={images.searchIcon} style={styles.headerIcon} />
            </View>

            <Text style={styles.headerLabel}>Movies</Text>

            <View style={styles.itemList}>
                <FlatList 
                    data={movies}
                    keyExtractor={(item,index)=>index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Details',item)} >
                            <Image source={item.image} style={styles.itemImage} />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Text style={styles.headerLabel}>Series</Text>
            <View style={styles.itemList}>
                <FlatList 
                        data={series}
                        keyExtractor={(item,index)=>index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('Details',item)} >
                                <Image source={item.image} style={styles.itemImage} />
                            </TouchableOpacity>
                        )}
                    />
            </View>
        </SafeAreaView>
    )
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor,
    },
    title: {
        color: colors.whiteColor,
        fontSize: perfectSize(25),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    header: {
        height: perfectSize(50),
        width: '100%',
        backgroundColor: colors.headerBackground,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: perfectSize(12),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    headerIcon: {
        height: perfectSize(40),
        width: perfectSize(40),
        resizeMode: 'contain'
    },
    headerLabel: {
        color: colors.whiteColor,
        fontSize: perfectSize(30),
        textAlign: 'left',
        marginLeft: perfectSize(20),
        fontWeight: 'bold',
        marginTop: perfectSize(20)
    },
    itemList: {
        height: '30%',
        width: '100%',
        marginTop: perfectSize(20),
    },
    itemImage: {
        height: '100%',
        width: perfectSize(170),
        marginHorizontal: 5,
        resizeMode: 'stretch',
        borderRadius: perfectSize(18),
    }
})