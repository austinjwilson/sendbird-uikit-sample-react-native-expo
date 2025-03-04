import React from 'react';
import {LogBox} from 'react-native';
import {withTouchReload} from 'react-native-touch-reload';
import {Logger} from '@sendbird/uikit-utils';
import AppRoot from './src/App';
import {withAppearance} from './src/hooks/useAppearance';
import './src/libs/notification';

// Sendbird.setLogLevel(Sendbird.LogLevel.DEBUG);
Logger.setLogLevel('warn');
LogBox.ignoreLogs(['UIKit Warning', "Warning: Can't perform", 'FileViewer > params.deleteMessage (Function)']);

const App = withTouchReload(withAppearance(AppRoot));

export default App;
