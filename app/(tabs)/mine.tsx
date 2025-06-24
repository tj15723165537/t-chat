import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

const Mine = () => {
  // 用户信息
  const userInfo = {
    name: '张小明',
    wechatId: 'wxid_zhangxiaoming',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  // 服务菜单
  const services = [
    { id: '1', icon: '💳', name: '支付' },
    { id: '2', icon: '⭐', name: '收藏' },
    { id: '3', icon: '📷', name: '相册' },
    { id: '4', icon: '🎫', name: '卡包' },
    { id: '5', icon: '😊', name: '表情' },
  ];

  // 设置选项
  const settings = [
    { id: '1', icon: '⚙️', name: '设置' },
    { id: '2', icon: '🌙', name: '夜间模式' },
    { id: '3', icon: '👤', name: '切换账号' },
    { id: '4', icon: '❓', name: '帮助与反馈' },
    { id: '5', icon: 'ℹ️', name: '关于微信' },
  ];

  // 渲染设置项
  const renderSettingItem = (item: any) => (
      <TouchableOpacity style={styles.settingItem} key={item.id}>
        <Text style={styles.settingIcon}>{item.icon}</Text>
        <Text style={styles.settingName}>{item.name}</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
  );

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" />

        {/* 标题栏 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>我</Text>
        </View>

        <ScrollView style={styles.content}>
          {/* 用户信息区域 */}
          <TouchableOpacity style={styles.userCard}>
            <Image source={{ uri: userInfo.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userInfo.name}</Text>
              <Text style={styles.userId}>微信号: {userInfo.wechatId}</Text>
            </View>
            <Text style={styles.qrCode}>⌗</Text>
          </TouchableOpacity>


          {/* 分隔线 */}
          <View style={styles.divider} />

          {/* 设置选项 */}
          <View style={styles.settingsContainer}>
            {settings.map(renderSettingItem)}
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    height: 44,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 16,
    backgroundColor: '#e0e0e0',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  userId: {
    fontSize: 14,
    color: '#888',
  },
  qrCode: {
    fontSize: 24,
    color: '#888',
  },
  servicesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginBottom: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: 'center',
    width: '30%',
  },
  serviceIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    color: '#333',
  },
  divider: {
    height: 8,
    backgroundColor: '#f1f1f1',
  },
  settingsContainer: {
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  settingName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
});

export default Mine;
