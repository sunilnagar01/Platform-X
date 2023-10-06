import { useState } from 'react';
import { Text, View, Share, Alert, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomePageCardFooter({ time, title }) {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: title
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {

                }
                else {

                }
            } else if (result.action === Share.dismissedAction) {

            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

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
        <View style={styles.footerContainer}>
            <View style={styles.timeContainer}>
                <Ionicons name='time-outline' color={'white'} size={24} />
                <Text style={styles.timeText}>{time}</Text>
            </View>
            <View style={styles.footerButtonContainer}>
                <Ionicons name='share-social-outline' color={'white'} size={24} onPress={onShare} />
                <Ionicons name={bookmark} color={'white'} size={24} style={styles.bookmarkButton} onPress={onBookmark} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        borderTopColor: 'rgb(230, 225, 225)',
        borderTopWidth: 1,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 14
    },
    footerButtonContainer: {
        flexDirection: 'row',
    },
    bookmarkButton: {
        marginLeft: 30
    }
})
