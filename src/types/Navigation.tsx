import { StackNavigationProp } from '@react-navigation/stack';

export type StackNavProp<T extends keyof StackParamList> = StackNavigationProp<
  StackParamList,
  T
>;

export type StackParamList = {
    Home: undefined;
    Login: undefined;
    Settings: undefined;
    Profile: undefined;
}