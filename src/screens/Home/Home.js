import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, LayoutAnimation, TouchableOpacity, Platform, UIManager, StatusBar, Dimensions } from 'react-native';
import moment from 'moment';
import Animated from 'react-native-reanimated';
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item';
import { newsService } from '../../_services'
import { styles } from './HomeStyles';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const { multiply, sub } = Animated;

if(Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class Home extends React.Component {
  state = {
    news: null,
    filter: [],
    isFetching: false,
    width: widthScreen,
    height: heightScreen,
  }

  componentDidMount() {

    this.filterSubscribe = newsService.getFilter.subscribe( filter => { 
      this.setState({ filter })
    })

    newsService.getNews().then(( news ) => {
      const { hits } = news
      hits.forEach((x, i) => {
        const { url, story_text, story_title, title } = x
      })
      if(this.state.filter.length)
      {
        hits.filter((d) => this.state.filter.indexOf(d.objectID) == -1);
        this.setState({ news: hits })
      }
      else
      {
        this.setState({ news : hits })
      }
    })
  }

  componentWillUnmount() {
    this.filterSubscribe.unsubscribe()
  }

  filterItem = (item) => {
    let updateFilter = this.state.filter
    updateFilter.push(item.objectID)
    const updateNews = this.state.news.filter((d) => d.objectID != item.objectID )
    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    newsService.setFilter(updateFilter)
    this.setState({ news: updateNews, filter: updateFilter });
  }

  renderUnderlayLeft = ({ item }) => (
    <Animated.View
      style={styles.underlayLeft}
    >
      <TouchableOpacity onPressOut={() => this.filterItem(item)}>
        <View style={[styles.deleteParentContainer, { width: widthScreen*2.5/10}]}>
          <View style={styles.deleteMarginTop}></View>
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteText}>Delete</Text>
          </View>
          <View style={styles.deleteMarginBottom}></View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )

  onRefresh = () => {
    this.setState({ isFetching: true })
    newsService.getNews().then(( news ) => {
      const { hits } = news
      if(this.state.filter.length)
      {
        hits.filter((d) => this.state.filter.indexOf(d.objectID) == -1);
        this.setState({ news: hits, isFetching: false })
      }
      else
      {
        this.setState({ news : hits, isFetching: false })
      }
    })
  }

  renderItem = ({ item, index }) => {

    const datePosted = moment(item.created_at);
    const currenteDate = moment()
    const diff = currenteDate.diff(datePosted);
    const diffMinutes = currenteDate.diff(datePosted, 'minutes');
    const diffHours = currenteDate.diff(datePosted, 'hours');

    let titleWords = []
    const normalize = item.title ? item.title.length : 0;

    return (
      <View style={styles.itemContainer}>
        <View style={[styles.authorNTitleContainer, { width: widthScreen - 40 }]}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle} numberOfLines={2} adjustsFontSizeToFit={true}>{item.title ? item.title : 'Pro hack news'}</Text>
          </View>
          <View style={[styles.authorContainer, { width: widthScreen }]}>
            <Text style={styles.textAuthor}>{item.author} - {diffHours ? diffHours + 'h' : diffMinutes + 'min'} </Text>
          </View>
        </View>
        
        <View style={[styles.swipeItemContainer, { width: widthScreen }]}>
          <SwipeableItem
            key={item.objectID}
            item={item}
            overSwipe={100}
            renderUnderlayLeft={this.renderUnderlayLeft}
            snapPointsLeft={[100]}
            >
            <View style={[styles.row, { width: widthScreen }]}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('web', { uri: item.url }) }}>
                <View style={[ styles.rowChild , { width: widthScreen }]}></View>
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
      <SafeAreaView style={styles.contaier}>
        {news &&  <FlatList
                    keyExtractor={(item) => item.objectID}
                    data={this.state.news}
                    renderItem={this.renderItem}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                  />
        }
      </SafeAreaView>
    )
  }
}

export { Home }
