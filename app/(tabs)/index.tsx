import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

interface ChatItem {
  id: string
  name: string
  message: string
  time: string
  unread?: number
  avatar?: string
}

const Chat = () => {
  // 聊天数据
  const chatData: ChatItem[] = [
    {
      id: '1',
      name: '李晓华',
      message: '好的，那我们下午3点见面讨论项目细节',
      time: '12:30',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: '产品研发群',
      message: '张总：新版本的设计稿已经上传到群文件了',
      time: '11:45',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      unread: 3,
    },
    {
      id: '3',
      name: '王经理',
      message: '周报已经收到，辛苦了',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '10:20',
    },
    {
      id: '4',
      name: '陈工程师',
      message: '服务器已经部署完成，可以开始测试了',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '09:15',
    },
    {
      id: '5',
      name: '项目管理群',
      message: '刘总：明天上午10点全体会议，请准时参加',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '昨天',
      unread: 12,
    },
    {
      id: '6',
      name: '赵设计师',
      message: 'UI设计稿已经修改完成，麻烦确认一下',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '昨天',
    },
  ]

  // 渲染聊天项
  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        router.push('/chatDetail')
      }}>
      <View>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.unread && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
          {item.message}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 标题栏 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>聊天</Text>
      </View>

      {/* 聊天列表 */}
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#e0e0e0',
  },
  listContent: {
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: 'relative',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  message: {
    fontSize: 14,
    color: '#666',
    maxWidth: '90%',
  },
  unreadBadge: {
    position: 'absolute',
    right: 16,
    top: 0,
    backgroundColor: '#f44336',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 78,
  },
})

export default Chat
