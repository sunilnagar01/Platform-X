import { StyleSheet, ImageBackground, View, Text, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";

export default function HomePageCard({ item }) {

    const imgUrl = item.imgUrl;
    const postType = item.postType;
    const title = item.title;
    const time = item.time;
    const description = item.description;

    function onCardPressHandler() {
        console.log('Card Pressed');
        console.log(title);
    }

    const [bookmark, setBookmark] = useState('bookmark-outline');

    function onBookmark() {
        if (bookmark === 'bookmark-outline') {
            console.log('Post Bookmarked:', title)
            setBookmark('bookmark')
        } else {
            console.log('Post Removed From Bookmarks:', title)
            setBookmark('bookmark-outline');
        }
    }

    return (
        <View style={styles.rootContainer} >
            <ImageBackground source={{ uri: imgUrl }} style={styles.imageBackground}>
                <View style={styles.cardOuterContainer}>
                    <Pressable onPress={onCardPressHandler} style={({ pressed }) => pressed ? [styles.pressableContainer, styles.cardPressed] : styles.pressableContainer}>
                        <View style={styles.cardContainer}>
                            <View style={styles.postTypeContainer}>
                                <Text style={styles.postTypeText}>{postType}</Text>
                            </View>
                            <View>
                                {(postType === 'Video' || postType === 'Soundboard') &&
                                    <Ionicons name='play-circle' color={'white'} size={56} />}
                                <View style={styles.titleContainer}>
                                    <Text style={styles.titleText}>{title}</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    {/* <View style={styles.footerContainer}>
                        <View style={styles.timeContainer}>
                            <Ionicons name='time-outline' color={'white'} size={18} />
                            <Text style={styles.timeText}>{time}</Text>
                        </View>
                        <View style={styles.footerButtonContainer}>
                            <Ionicons name='share-social-outline' color={'white'} size={20} />
                            <Ionicons name={bookmark} color={'white'} size={20} style={styles.bookmarkButton} onPress={onBookmark} />
                        </View>
                    </View> */}
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 21,
        borderRadius: 5,
        overflow: 'hidden',
    },
    imageBackground: {
        height: 330,
        width: 330,
        borderRadius: 5,
    },
    cardOuterContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        padding: 15,
        paddingTop: 30,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    postTypeContainer: {
        borderRadius: 20,
        minWidth: 86,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 18
    },
    postTypeText: {
        color: "#580887",
        fontFamily: "HCLTechRoobert-Regular",
        fontSize: 16,
    },
    // playButtonIconContainer: {
    //     borderRadius: 28,
    //     width: 56,
    //     height: 56,
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    titleContainer: {
        borderBottomColor: 'rgb(230, 225, 225)',
        borderBottomWidth: 1,
        width: 300,
        paddingVertical: 15
    },
    titleText: {
        color: 'rgb(255,255,255)',
        fontFamily: "HCLTechRoobert-Regular",
        fontSize: 20,
    },
    pressableContainer: {
        flex: 1
    },
    cardPressed: {
        opacity: 0.80,
    },
    // footerContainer: {
    //     paddingVertical: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between'
    // },
    // timeContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },
    // timeText: {
    //     color: 'white',
    //     marginLeft: 10,
    //     fontSize: 12
    // },
    // footerButtonContainer: {
    //     flexDirection: 'row',
    // },
    // bookmarkButton: {
    //     marginLeft: 30
    // }
})