import React, { useState } from 'react';
import { Switch } from 'react-native';

import styles from '../style/Style'

export default function SimpleSwitch(props) {
    const [isEnabled, setIsEnabled] = useState(props.isEnabled);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <Switch
              style={styles.switchB}
              onValueChange={toggleSwitch}
              value={props.isEnabled}
          />
    )
}