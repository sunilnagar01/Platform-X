import { View, StyleSheet, Image, Dimensions, Pressable, Animated, Text } from "react-native";
import DATA from "../data/CardData";
import DetailsBar from "../components/DetailsBar";
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

export default function Details() {

    const [current, setCurrent] = useState(0);
    const [content, setContent] = useState(DATA);
    const progress = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const start = () => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                next();
            }
        })
    }
    const close = () => {
        let tempData = content;
        tempData.map(item => {
            item.finish = 0;
        })
        setContent(tempData);
        progress.setValue(0);
        navigation.goBack();
    }

    const next = () => {
        if (current != content.length - 1) {
            let tempData = content;
            tempData[current].finish = 1;
            setContent(tempData);
            setCurrent(current + 1);
            progress.setValue(0);
        } else {
            close();
        }
    }
    const previous = () => {
        if (current > 0) {
            let tempData = content;
            tempData[current - 1].finish = 0;
            setContent(tempData);
            setCurrent(current - 1);
            progress.setValue(0);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: content[current].imgUrl }} style={styles.image} onLoadEnd={() => {
                    progress.setValue(0);
                    start();
                }} />
                <View style={styles.detailsBarIndicatorContainer}>
                    {content.map((item, index) => {
                        return <DetailsBar current={current} content={content} index={index} progress={progress} />
                    })}
                </View>
                <View style={styles.pressableContainer}>
                    <Pressable style={styles.pressable} onPress={() => {
                        previous();
                    }}></Pressable>
                    <Pressable style={styles.pressable} onPress={() => {
                        next();
                    }}></Pressable>
                </View>
                <Pressable onPress={close} style={styles.closeButton}>
                    <Image source={require('../assets/icons/CloseX.png')} />
                </Pressable>
                <Pressable style={styles.readContainer} onPress={() => console.log(content[current].description)} >
                    <Text style={styles.readText}>Read Article</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // padding: 10
    },
    closeButton: {
        height: 24,
        width: 24,
        position: 'absolute',
        top: 9,
        right: 15
    },
    detailsBarIndicatorContainer: {
        marginHorizontal: 15,
        // width: '100%',
        position: 'absolute',
        top: 42,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: width,
        height: height
    },
    pressableContainer: {
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pressable: {
        width: '50%',
        height: '100%',
    },
    readContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    readText: {
        fontSize: 16,
        color: 'white'
    }
});