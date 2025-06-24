import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

const ChatDetailPage = () => {
  // 聊天消息数据
  const messages = [
    {
      id: '1',
      text: '你好啊，今天天气真不错！',
      time: '上午 10:30',
      isMe: false,
      name: '王小美',
      read: false
    },
    {
      id: '2',
      text: '是啊，适合出去玩，要不要一起去公园散步？',
      time: '上午 10:31',
      isMe: true,
      read: true
    },
    {
      id: '3',
      text: '好啊，那我们下午两点在公园门口见面吧！',
      time: '上午 10:32',
      isMe: false,
      name: '王小美',
      read: false
    },
    {
      id: '4',
      text: '没问题，我准时到！记得带上相机，我们可以拍些照片。',
      time: '上午 10:33',
      isMe: true,
      read: true
    },
  ];

  return (
      <SafeAreaView style={styles.container}>
        {/* 标题栏 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>王小美</Text>
        </View>

        {/* 聊天内容区域 */}
        <ScrollView
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContent}
        >
          {messages.map((message) => (
              <View
                  key={message.id}
                  style={[
                    styles.messageContainer,
                    message.isMe ? styles.myMessage : styles.otherMessage
                  ]}
              >
                {!message.isMe && (
                    <Text style={styles.senderName}>{message.name}</Text>
                )}
                <View
                    style={[
                      styles.messageBubble,
                      message.isMe ? styles.myBubble : styles.otherBubble
                    ]}
                >
                  <Text style={styles.messageText}>{message.text}</Text>
                </View>
                <View style={styles.messageFooter}>
                  <Text style={styles.messageTime}>{message.time}</Text>
                  {message.isMe && message.read && (
                      <Text style={styles.readStatus}>✅</Text>
                  )}
                </View>
              </View>
          ))}
        </ScrollView>

        {/* 输入框区域 */}
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              placeholder="输入消息..."
              placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.mediaButton}>
            {/*<Image*/}
            {/*    source={require('./assets/image-icon.png')}*/}
            {/*    style={styles.mediaIcon}*/}
            {/*/>*/}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 44,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  readStatus: {
    marginLeft: 4,
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
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  mediaButton: {
    marginLeft: 12,
    padding: 8,
  },
  mediaIcon: {
    width: 24,
    height: 24,
  },
});

export default ChatDetailPage;
