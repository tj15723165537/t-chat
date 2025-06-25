import React, { useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { isEmpty } from '@/utils'

const ChatDetail = () => {
  // 聊天消息数据
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: '你好啊，今天天气真不错！',
      time: '上午 10:30',
      isMe: false,
      name: '王小美',
      read: false,
    },
    {
      id: '2',
      text: '是啊，适合出去玩，要不要一起去公园散步？',
      time: '上午 10:31',
      isMe: true,
      read: true,
    },
    {
      id: '3',
      text: '好啊，那我们下午两点在公园门口见面吧！',
      time: '上午 10:32',
      isMe: false,
      name: '王小美',
      read: false,
    },
    {
      id: '4',
      text: '没问题，我准时到！记得带上相机，我们可以拍些照片。',
      time: '上午 10:33',
      isMe: true,
      read: true,
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const scrollViewRef = useRef<ScrollView>(null)

  function sendMessage() {
    if (isEmpty(inputValue)) return
    setMessages([
      ...messages,
      {
        id: Math.random() + '',
        text: inputValue,
        time: '下午 10:34',
        isMe: true,
        read: false,
      },
    ])
    setInputValue('')
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }, 50)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* 标题栏 */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <MaterialIcons size={20} name="arrow-back-ios" />
          </Pressable>

          <Text style={styles.headerTitle}>王小美</Text>
          <MaterialIcons size={20} name="more-vert" />
        </View>

        {/* 聊天内容区域 */}
        <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent} ref={scrollViewRef}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[styles.messageContainer, message.isMe ? styles.myMessage : styles.otherMessage]}>
              {!message.isMe && <Text style={styles.senderName}>{message.name}</Text>}
              <View style={[styles.messageBubble, message.isMe ? styles.myBubble : styles.otherBubble]}>
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
              <View style={styles.messageFooter}>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* 输入框区域 */}
        <KeyboardAvoidingView behavior={'padding'}>
          <View style={styles.inputContainer}>
            <Pressable>
              <MaterialIcons size={28} name="emoji-emotions" className="mr-2" />
            </Pressable>
            <Pressable>
              <MaterialIcons size={28} name="image" className="mr-2" />
            </Pressable>
            <TextInput
              style={styles.input}
              placeholder="输入消息..."
              value={inputValue}
              onChange={(e) => setInputValue(e.nativeEvent.text)}
              placeholderTextColor="#999"
            />
            <TouchableOpacity activeOpacity={0.8} onPress={sendMessage}>
              <View style={styles.sendButton}>
                <MaterialIcons size={16} color="white" name="rocket-launch" />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 44,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 16,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  chatContent: {
    paddingVertical: 16,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  senderName: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 5,
    marginBottom: 4,
  },
  myBubble: {
    backgroundColor: '#95ec69',
    borderTopRightRadius: 0,
  },
  otherBubble: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#4F46E5',
    padding: 8,
    borderRadius: 4,
  },
})

export default ChatDetail
