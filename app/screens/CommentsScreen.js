import React, {useState, useEffect} from 'react';
import apiCalls from '../../apiCalls.js';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity } from 'react-native';

function CommentsScreen({navigation, route}) {

  const [comments, setComments] = useState([])


  useEffect(() => {

    function fetchComments() {
      console.log('getting comments search just ran')
      apiCalls.getCommentList(route.params.channelId)
        .then (({ data }) => {
          setComments(data.items)
        })
        .catch((err) => {
          navigation.navigate('search')
          alert(err + '\nPlease try another name or search type')
          return;
        })
      }
      fetchComments()

  }, [route.params])
  return (
    <View style={styles.background}>
      {console.log(comments.length)}
     <Text>what up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

})

export default CommentsScreen;