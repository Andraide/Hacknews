import React from 'react'
import { StyleSheet , Modal , View , Text , Image , Dimensions, ScrollView } from 'react-native'
import { TouchableOpacity ,TouchableHighlight } from 'react-native-gesture-handler'
import { retry } from 'rxjs'
import { newsService } from '../../_services'
var widthScreen = Dimensions.get('window').width
var heightScreen = Dimensions.get('window').height


class Home extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = { 

      news: null 

    }
  }

  componentDidMount() {
    newsService.getNews().then(( news ) => {
      this.setState({ news })
    })
  }

  componentWillUnmount() {

  }

  sortByDate(a, b) {
    if (a.created_at - b.created_at < 0) {
      return 1
    } 

    if (a.created_at - b.created_at > 0)
    {
      return -1
    }

    if(a.created_at - b.created_at == 0)
    {
      return 0
    }
  }

  newsScroll() {
    //console.log("Keys", Object.keys(this.state.news))
    const { hits, nbHits, page, nbPages, hitsPerPage, exhaustiveNbHits, query, params, processingTimeMS } = this.state.news

    hits.sort(this.sortByDate)

    hits.map(( x, i, v ) => {
      const { created_at, title, author, url } = x
      console.log("Created at", created_at, i)
    })    

    return (
      <View style={{ backgroundColor: 'blue', flex: 0.5 }}><Text>News</Text></View>
    )
  }

  render() {
    const { news } = this.state

    return (
             <View style={{ backgroundColor: 'red', flex: 1 }}>
                 <Text>Home Screen</Text>
                 <ScrollView>
                  {news && this.newsScroll()}
                </ScrollView>
             </View>
                
    ) 

  }

}

export { Home }