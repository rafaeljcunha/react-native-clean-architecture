import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonVariant } from '../../types/button.types';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { styles } from './styles';

export default function HomeScreen() {
  const navigation = useNavigation();

  function handleNaviteToCounterScreen() {
    navigation.navigate('Counter');
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.viewContainer}>
        <Text textStyle={styles.displayText}>
          Escolha um dos exemplos abaixo:
        </Text>
        <Button
          variant={ButtonVariant.PRIMARY}
          onPress={handleNaviteToCounterScreen}
          title="Ir para o Contador"
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
    </SafeAreaView>
  );
}
