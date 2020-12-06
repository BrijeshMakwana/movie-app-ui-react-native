import React from 'react'
import { ScrollView, ImageBackground, TouchableOpacity, FlatList, Image, View, Text , StyleSheet} from 'react-native'
import { images, colors, perfectSize } from '../theme'
export default function Details({ navigation,route }) {

    const name = route.params.name
    const image = route.params.image
    const year = route.params.year
    const stats = route.params.stats
    const details = route.params.details
    const genres = route.params.genres

    return (
        <ScrollView style={styles.container}>

            <ImageBackground source={image} style={styles.poster}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backArrowButton}>
                    <Image source={images.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
            </ImageBackground>
                <View style={styles.detailsContainer}>
                    <View style={styles.marker} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.stats}>{year} {stats}</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>Add to watchlist</Text>
                    </TouchableOpacity>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headline}>Storyline</Text>
                    </View>
                    <Text style={styles.details}>{details}</Text>
                
                    <View style={styles.headerContainer}>
                        <Text style={styles.headline}>Genres</Text>
                        <FlatList 
                            data={genres}
                            style={styles.list}
                            keyExtractor={(item,index)=>index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.genreContainer}>
                                    <Text style={styles.genre}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
        </ScrollView>
    )
}


//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: colors.appBackgroundColor
    },
    poster: {
        height: perfectSize(400),
        width: '100%',
    },
    backArrowButton: {
        height: '5%',
        width: '5%',
        marginTop: perfectSize(56),
        marginLeft: perfectSize(18),
    },
    backArrow: {
        height: perfectSize(23),
        width: perfectSize(23),
        resizeMode: 'contain'
    },
    detailsContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.appBackgroundColor,
        borderTopLeftRadius: perfectSize(40),
        borderTopRightRadius: perfectSize(40),
        bottom: '5%',
        alignItems: 'center'
    },
    marker: {
        backgroundColor: colors.blackColor,
        height: perfectSize(12),
        width: perfectSize(200),
        marginTop: perfectSize(18),
        borderRadius: perfectSize(23)
    },
    name: {
        fontSize: perfectSize(30),
        marginTop: perfectSize(18),
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: colors.whiteColor
    },
    stats: {
        fontSize: perfectSize(18),
        marginTop: perfectSize(18),
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: colors.whiteColor,
        opacity: 0.5
    },
    buttonContainer: {
        height: perfectSize(40),
        width: perfectSize(318),
        backgroundColor: colors.buttonBackground,
        borderRadius: perfectSize(23),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: perfectSize(23),
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: perfectSize(12),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    buttonTitle: {
        fontSize: perfectSize(23),
        fontWeight: 'bold',
        color: colors.whiteColor,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: perfectSize(12),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    headerContainer: {
        width: '100%'
    },
    headline: {
        marginTop: perfectSize(23),
        marginLeft: perfectSize(23),
        fontWeight: 'bold',
        fontSize: perfectSize(23),
        letterSpacing: 1,
        color: colors.whiteColor
    },
    details: {
        marginTop: perfectSize(23),
        marginLeft: perfectSize(23),
        marginRight: perfectSize(23),
        textAlign: 'justify',
        fontSize: perfectSize(18),
        opacity: 0.7,
        color: colors.whiteColor
    },
    list: {
        marginTop: perfectSize(5),
        marginLeft: perfectSize(18),
    },
    genreContainer: {
        marginTop: perfectSize(5),
        marginHorizontal: perfectSize(5),
        height: perfectSize(40),
        width: perfectSize(100),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    genre: {
        fontSize: perfectSize(18),
        fontWeight: 'bold',
        color: colors.whiteColor
    }
})