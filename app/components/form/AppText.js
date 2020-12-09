import React from 'react';
import { Text } from 'react-native';

const AppText = ({ children, style, onPress, size }) =>(
    <Text 
        onPress={onPress} 
        style={[style, { fontFamily: size === 'bold' ? 'NewJuneBold' : ( size === 'regular' ? 'NewJuneMedium' : 'NewJuneBook' )} ]}
    >{children}</Text>
)
export default AppText;
