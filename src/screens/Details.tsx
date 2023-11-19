import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Animated,
  Text,
  Dimensions,
} from 'react-native';
import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DetailsBar from '../components/DetailsBar';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    key: 1,
    imgUrl:
      'https://imgs.search.brave.com/TuexHsGABEkWbx5YNCILbeyceoSoTr2FXNsgo6HcmHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvYWktZ2VuZXJh/dGVkLXNjaS1maS1j/aXR5LUN5YmVyY2l0/eS1zdHlsZS1ieS1K/b3ZpYW5Tb2NpZXR5/LmpwZw',
    postType: 'Tweet',
    title:
      'Trek the Road Not Taken: 5 Himalayan Treks to Unleash the Adventurer in You This Summer',
    time: '8 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
  {
    key: 2,
    imgUrl:
      'https://imgs.search.brave.com/Z7S9WQNYRS3AX9z4STFlEOde4WQ4e0YPFbBQjQXsseI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nYW1l/aXNoYXJkLmdnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA3/L21mcmFja19yZWFs/aXN0aWNfcGhvdG9f/b2ZfcGNfZ2FtaW5n/X2Rlc2tfMmMzZjQ2/ODQtYmE2My00ZDEz/LTgxMDMtY2NlOGIz/YWY3MThjLmpwZWc',
    postType: 'Stories',
    title:
      'une Updates For Amazon Prime Gaming: Full List Of Amazing Free Games',
    time: '9 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
  {
    key: 3,
    imgUrl:
      'https://imgs.search.brave.com/ye906_PFlnKtKQkP0Mp1Y48bXvWCbpoAFHZea-nFANs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Ym9sbHlpbnNpZGUu/Y29tL2FydGljbGVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy80LzIwMjIvMTIv/QC04MzEtNjk2eDM2/OS5qcGc',
    postType: 'Article',
    title: 'Corsair HS65 Surround Review: Comfort And Quality At A Budget',
    time: '4 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
  {
    key: 4,
    imgUrl:
      'https://imgs.search.brave.com/nPluBC8DR4O83X0rnGtzBKEZDzavlAiPHaNGkSSKvdw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTE3Nzk3/My84MzA4L2kvNjAw/L2RlcG9zaXRwaG90/b3NfODMwODAzMDgt/c3RvY2stcGhvdG8t/Y29tcHV0ZXItcGVy/aXBoZXJhbHMtYW5k/LWxhcHRvcC1hY2Nl/c3Nvcmllcy5qcGc',
    postType: 'Video',
    title: 'Logitech G502 X Plus Review: A Very Close Second',
    time: '6 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
  {
    key: 5,
    imgUrl:
      'https://imgs.search.brave.com/svXOpvi8r2DtSIu4ul7kBUdgmLN-R5AOQaLxLhdU3qo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAy/MjEyL2JnbWktc2l4/dGVlbl9uaW5lLmpw/ZWc_VmVyc2lvbklk/PXpzTGx0Y2x5WTZ1/cWVvV2FfVzdmN2dW/d2VyTVlmNU1aJnNp/emU9NjkwOjM4OA',
    postType: 'Infographic',
    title:
      'BGMI In-Game Names: Cool Gamer Tags Suggested By ChatGPT And Google Bard',
    time: '8 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
  {
    key: 6,
    imgUrl:
      'https://imgs.search.brave.com/dvs-jPzxWJ2TLAr88YO5noUB7dJizFXGJEDNEeDSs28/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2LzU0/LzQ0L2U2NTQ0NGM5/YzIyODU0OGMzMzFh/Y2VlNTE2YTMwNzFi/LmpwZw',
    postType: 'Soundboard',
    title: "Marvel's Spider-Man 2: PS5 Exclusive Release Date And...",
    time: '8 min',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
    finish: 0,
  },
];

export default function Stories() {
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState(DATA);
  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        next();
      }
    });
  };
  const close = () => {
    let tempData = content;
    tempData.map(item => {
      item.finish = 0;
    });
    setContent(tempData);
    progress.setValue(0);
    navigation.goBack();
  };

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
  };
  const previous = () => {
    if (current > 0) {
      let tempData = content;
      tempData[current - 1].finish = 0;
      setContent(tempData);
      setCurrent(current - 1);
      progress.setValue(0);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: content[current].imgUrl}}
          style={styles.image}
          onLoadEnd={() => {
            progress.setValue(0);
            start();
          }}
        />
        <View style={styles.pressableContainer}>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              previous();
            }}></Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              next();
            }}></Pressable>
        </View>
        <View style={styles.detailsBarIndicatorContainer}>
          {content.map((item, index) => {
            return (
              <DetailsBar
                current={current}
                content={content}
                index={index}
                progress={progress}
                key={item.key}
              />
            );
          })}
        </View>
        <Pressable onPress={close} style={styles.closeButton}>
          <Image source={require('../assets/icons/CloseX.png')} />
        </Pressable>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
          style={styles.storyBottomContainer}>
          <Text style={styles.titleText} numberOfLines={3}>
            {content[current].title}
          </Text>
          <Pressable
            style={styles.readContainer}
            onPress={() => console.log(content[current].title)}>
            <Text style={styles.readText}>Read Article</Text>
            <Image source={require('../assets/icons/arrow_4.png')} />
          </Pressable>
        </LinearGradient>
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
    right: 15,
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
    width: '100%',
    height: '100%',
  },
  pressableContainer: {
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressable: {
    width: '50%',
    height: '100%',
  },
  storyBottomContainer: {
    position: 'absolute',
    height: '30%',
    width: '100%',
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  titleText: {
    color: '#FFFFFF',
    // fontFamily: theme.fonts.HCLTechRoobert.medium,
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 38,
    marginBottom: 44,
  },
  readContainer: {
    flexDirection: 'row',
    marginBottom: 48,
    alignItems: 'center',
  },
  readText: {
    fontSize: 14,
    color: '#FFFFFF',
    // fontFamily: theme.fonts.HCLTechRoobert.regular,
    marginRight: 10,
    lineHeight: 17.7,
    fontWeight: '400',
  },
});

// import {
//   View,
//   StyleSheet,
//   Image,
//   Dimensions,
//   Pressable,
//   Animated,
//   Text,
// } from 'react-native';
// import DATA from '../data/CardData';
// import DetailsBar from '../components/DetailsBar';
// import {useRef, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

// const {height, width} = Dimensions.get('window');

// export default function Details() {
//   const [current, setCurrent] = useState(0);
//   const [content, setContent] = useState(DATA);
//   const progress = useRef(new Animated.Value(0)).current;
//   const navigation = useNavigation();

//   const start = () => {
//     Animated.timing(progress, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: false,
//     }).start(({finished}) => {
//       if (finished) {
//         next();
//       }
//     });
//   };
//   const close = () => {
//     let tempData = content;
//     tempData.map(item => {
//       item.finish = 0;
//     });
//     setContent(tempData);
//     progress.setValue(0);
//     navigation.goBack();
//   };

//   const next = () => {
//     if (current != content.length - 1) {
//       let tempData = content;
//       tempData[current].finish = 1;
//       setContent(tempData);
//       setCurrent(current + 1);
//       progress.setValue(0);
//     } else {
//       close();
//     }
//   };
//   const previous = () => {
//     if (current > 0) {
//       let tempData = content;
//       tempData[current - 1].finish = 0;
//       setContent(tempData);
//       setCurrent(current - 1);
//       progress.setValue(0);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Image
//           source={{uri: content[current].imgUrl}}
//           style={styles.image}
//           onLoadEnd={() => {
//             progress.setValue(0);
//             start();
//           }}
//         />
//         <View style={styles.detailsBarIndicatorContainer}>
//           {content.map((item, index) => {
//             return (
//               <DetailsBar
//                 current={current}
//                 content={content}
//                 index={index}
//                 progress={progress}
//                 key={item.key}
//               />
//             );
//           })}
//         </View>
//         <View style={styles.pressableContainer}>
//           <Pressable
//             style={styles.pressable}
//             onPress={() => {
//               previous();
//             }}></Pressable>
//           <Pressable
//             style={styles.pressable}
//             onPress={() => {
//               next();
//             }}></Pressable>
//         </View>
//         <Pressable onPress={close} style={styles.closeButton}>
//           <Image source={require('../assets/icons/CloseX.png')} />
//         </Pressable>
//         <Pressable
//           style={styles.readContainer}
//           onPress={() => console.log(content[current].description)}>
//           <Text style={styles.readText}>Read Article</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     // padding: 10
//   },
//   closeButton: {
//     height: 24,
//     width: 24,
//     position: 'absolute',
//     top: 9,
//     right: 15,
//   },
//   detailsBarIndicatorContainer: {
//     marginHorizontal: 15,
//     // width: '100%',
//     position: 'absolute',
//     top: 42,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   image: {
//     width: width,
//     height: height,
//   },
//   pressableContainer: {
//     height: height,
//     width: width,
//     position: 'absolute',
//     top: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   pressable: {
//     width: '50%',
//     height: '100%',
//   },
//   readContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     paddingHorizontal: 20,
//     paddingVertical: 5,
//     borderRadius: 20,
//   },
//   readText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });
