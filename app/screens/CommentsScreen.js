import React, {useState, useEffect} from 'react';
import apiCalls from '../../apiCalls.js';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import CommentList from './CommentList.js';


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
    <ScrollView>
    <View style={styles.background}>
     <Text style={styles.title}>SOME COMMENTS FROM {route.params.channelName}'s CHANNEL</Text>
     <View style={styles.commentList}>
       {comments.map((comment) => {
         return (
           <CommentList key={comment.etag} comment={comment.snippet.topLevelComment.snippet.textDisplay}/>
           );
       })}
     </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentList:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontWeight: 'bold',
  }

})

export default CommentsScreen;