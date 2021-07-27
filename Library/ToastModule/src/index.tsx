import { NativeModules } from 'react-native';

type ToastModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ToastModule } = NativeModules;

export default ToastModule as ToastModuleType;
