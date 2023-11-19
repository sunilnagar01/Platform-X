import {View, StyleSheet, Animated} from 'react-native';

export default function StoryIndicator({
  current,
  content,
  index,
  progress,
}: any) {
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.innerContainer,
          {flex: current == index ? progress : content[index].finish},
        ]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 2,
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  innerContainer: {
    height: 4,
    backgroundColor: '#FFFFFF',
  },
});
