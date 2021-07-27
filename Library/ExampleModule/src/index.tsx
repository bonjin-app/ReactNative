import { NativeModules } from 'react-native';

type ExampleModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ExampleModule } = NativeModules;

export default ExampleModule as ExampleModuleType;
