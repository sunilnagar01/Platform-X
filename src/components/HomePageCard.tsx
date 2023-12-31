import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePageCardFooter from './HomePageCardFooter';
import {useNavigation} from '@react-navigation/native';

export default function HomePageCard({item}: any) {
  const navigation = useNavigation();

  const imgUrl = item.imgUrl;
  const postType = item.postType;
  const title = item.title;
  const time = item.time;
  const description = item.description;

  function onCardPressHandler() {
    navigation.navigate('details', {
      title: title,
      description: description,
      postType: postType,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={{uri: imgUrl}} style={styles.imageBackground}>
        <View style={styles.cardOuterContainer}>
          <Pressable
            onPress={onCardPressHandler}
            style={styles.pressableContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.postTypeContainer}>
                <Text style={styles.postTypeText}>{postType}</Text>
              </View>
              <View>
                {(postType === 'Video' || postType === 'Soundboard') && (
                  <Image
                    source={require('../assets/icons/play_video_button.png')}
                    style={styles.playButton}
                  />
                )}
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{title}</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <HomePageCardFooter time={time} title={title} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 10,
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
    paddingHorizontal: 15,
    paddingVertical: 27,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  postTypeContainer: {
    borderRadius: 20,
    minWidth: 86,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 18,
  },
  postTypeText: {
    color: '#580887',
    fontFamily: 'HCLTechRoobert-Regular',
    fontSize: 16,
  },
  playButtonIconContainer: {
    borderRadius: 28,
    width: 56,
    height: 56,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 56,
    height: 56,
  },
  titleContainer: {
    width: 300,
    paddingVertical: 15,
  },
  titleText: {
    color: 'rgb(255,255,255)',
    fontFamily: 'HCLTechRoobert-Regular',
    fontSize: 20,
  },
  pressableContainer: {
    flex: 1,
  },
});
