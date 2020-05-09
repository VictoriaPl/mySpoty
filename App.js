import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchUsers} from './constants/api'

export default class App extends React.Component {
  static defaultProps = {
    fetchUsers
  }

  state = {
    loading: false,
    users: []
  }

  async componentDidMount() {
    this.setState({ loading: true})
    await this.props.fetchUsers().then(data => 
      this.setState({loading: false, users: data.users})
      )
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>My spoty!</Text>

        {this.state.users.map((user, i) => (
          <Text key={i}>{user.name}</Text>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
