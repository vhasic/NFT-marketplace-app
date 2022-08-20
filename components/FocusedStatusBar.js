// Components are reused across screens
// To generate react native functional component inside vs code type: rnfe

import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'react-native'

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused(); // true if the screen is focused

  // spreading props and sending it to the StatusBar component with additional props animated
  return isFocused ? <StatusBar animated={true} {...props}/> : null;
}

export default FocusedStatusBar