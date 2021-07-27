import { requireNativeComponent, ViewStyle } from 'react-native';

type ExampleViewProps = {
  color: string;
  style: ViewStyle;
};

export const ExampleViewViewManager = requireNativeComponent<ExampleViewProps>(
'ExampleViewView'
);

export default ExampleViewViewManager;
