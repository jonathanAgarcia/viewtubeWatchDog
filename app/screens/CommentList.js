import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

function CommentList({comment}) {
  return (
     <Text style={styles.singleComment}>{comment}</Text>
  );
}

const styles = StyleSheet.create({
  singleComment: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default CommentList;