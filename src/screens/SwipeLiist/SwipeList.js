import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, LayoutAnimation, TouchableOpacity, Platform, UIManager, StatusBar, Dimensions } from 'react-native';
//import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import Animated from 'react-native-reanimated';
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item';
import { newsService } from '../../_services'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const { multiply, sub } = Animated;

if(Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class SwipeList extends React.Component {
  state = {
    news: null,
    width: widthScreen,
    height: heightScreen,
  }

  componentDidMount() {

    newsService.getNews().then(( news ) => {
      const { hits } = news
      //console.log("Keys", Object.keys(hits[0]))
      hits.forEach((x, i) => {
        const { url, story_text, story_title, title } = x
        //console.log("Urls", url)
        //console.log("Story text", story_text)
        //console.log("Store title", story_title)
        console.log("title", title)
      })
      this.setState({ news : hits })
    })
  }

  renderUnderlayLeft = ({ item }) => (
    <Animated.View
      style={[styles.underlayLeft]}
    >
      <TouchableOpacity onPressOut={() => console.log("Press Out")}>
        <View style={{ flex: 1, backgroundColor: 'red', width: widthScreen*2.5/10, height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: 1/3 }}></View>
          <View style={{ flex: 1/3, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ backgroundColor: 'transparent', fontSize: 16, color: 'white' }}>Delete</Text>
          </View>
          <View style={{ flex: 1/3 }}></View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )

  renderItem = ({ item, index }) => {

    const datePosted = moment(item.created_at);
    const currenteDate = moment()
    const diff = currenteDate.diff(datePosted);
    const diffMinutes = currenteDate.diff(datePosted, 'minutes');
    const diffHours = currenteDate.diff(datePosted, 'hours');

    let titleWords = []
    const normalize = item.title ? item.title.length : 0;
    

    console.log("Length", normalize)
    return (
      <View style={{ backgroundColor:'transparent', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: 'black' }}>
        <View style={{ backgroundColor: 'transparent', width: widthScreen, alignItems: 'flex-start', justifyContent: 'flex-end', height: 100, marginLeft: 10 }}>
          <View style={{ height: 60, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <Text style={styles.textTitle} numberOfLines={2} adjustsFontSizeToFit={true}>{item.title ? item.title : 'Pro hack news'}</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', width: widthScreen, height: 40, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={styles.textAuthor}>{item.author} - {diffHours ? diffHours + 'h' : diffMinutes + 'min'} </Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', width: widthScreen, position: 'absolute' }}>
          <SwipeableItem
            key={item.objectID}
            item={item}
            overSwipe={100}
            renderUnderlayLeft={this.renderUnderlayLeft}
            snapPointsLeft={[100]}
            >
            <View style={[styles.row, { backgroundColor: 'transparent' ,width: widthScreen , height: 100 }]}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('web', { uri: item.url }) }}>
                <View style={{ backgroundColor: 'transparent', width: widthScreen, height: 100 }}></View>
              </TouchableOpacity>
            </View>
          </SwipeableItem>
        </View>
      </View>
          )
  }

  
  render() {

    const { news } = this.state

    return (
      <SafeAreaView style={[styles.contaier, { marginTop: StatusBar.currentHeight }]}>
        {news &&  <FlatList
                    keyExtractor={(item) => item.objectID}
                    data={this.state.news}
                    renderItem={this.renderItem}
                  />
        }
      </SafeAreaView>
    )
  }
}

export { SwipeList }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'black'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 26
  },
  textAuthor: {
    color: 'black',
    fontSize: 16
  },
  underlayLeft: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  }
})