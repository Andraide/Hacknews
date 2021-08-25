import React from 'react'
import { StyleSheet , Modal , View , Text , Image , Dimensions } from 'react-native'
import { TouchableOpacity ,TouchableHighlight } from 'react-native-gesture-handler'
import { newsService } from '../../_services'
var widthScreen = Dimensions.get('window').width
var heightScreen = Dimensions.get('window').height


class Home extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = { 

      visible : true 

    }
  }

  componentDidMount() {
    newsService.getNews().then(( news ) => {
      console.log("News", news)
    })
  }

  componentWillUnmount() {

    
    
  }

  render() {
   
    return (
             <View>
                 <Text>Home Screen</Text>
             </View>
                
    )

  }

}

export { Home }