import { AppRegistry } from 'react-native';
import App from './App'; // pastikan ini menunjuk ke App.jsx
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
