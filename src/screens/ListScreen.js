import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'



const ListScreen = () => {
  const friends = Array.from(
    { length: 10 },
    (_, key) => ({ name: `Friends ${key + 1}`, age: `Age ${Math.floor(Math.random() * (100)) + 1 }`})
  )

  /**
    FlatList: {
      horizontal: 水平滾動
      showsHorizontalScrollIndicator: 是否顯示水平滾動的 scroll bar
    }

   */

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return <Text style={styled.textStyle}>{item.name} - {item.age}</Text>
      }}
    />
  )
}

const styled = StyleSheet.create({
  textStyle: {
    // marginVertical: 10,
    backgroundColor: 'gray',
    padding: 10
  }
})

export default ListScreen