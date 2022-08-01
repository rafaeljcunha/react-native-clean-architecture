import React from 'react';
import { SafeAreaView } from 'react-native';
import Text from '../../../../components/Text/Text';
import Button from '../../../../components/Button/Button';
import { ButtonVariant } from '../../../../types/button.types';
import { styles } from './styles';
import { ICounterScreen } from '../../../types/counter-screen.type';
import { CounterActionTypes } from '../../../types/counter-reducer.types';

export default function CounterScreen({ state, dispatch }: ICounterScreen) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text textStyle={styles.displayText}>
        O valor do contador é: {state.count}
      </Text>
      <Button
        variant={ButtonVariant.PRIMARY}
        onPress={() => dispatch({ type: CounterActionTypes.INCREMENT })}
        title="Adicionar"
        titleStyle={styles.buttonTitleStyle}
      />
      <Button
        variant={ButtonVariant.SECONDARY}
        onPress={() => dispatch({ type: CounterActionTypes.DECREMENT })}
        title="Remover"
        titleStyle={styles.buttonTitleStyle}
      />
    </SafeAreaView>
  );
}
