import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from '../../styles/ButtonsStyles';

const FixedButtonsContainer = ({ children }) => (<View
  style={styles.fixedButtonContainer}
>
  { children }
</View>);

FixedButtonsContainer.propTypes = {
  children: PropTypes.element,
};

export default FixedButtonsContainer;
