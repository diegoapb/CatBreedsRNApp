import Reactotron from 'reactotron-react-native';
import { queryClient } from './queryClient';

const reactotron = Reactotron
  .configure({
    name: 'CatBreedsRNApp',
  })
  .useReactNative()
  .connect();

if (__DEV__) {
  // @ts-ignore
  reactotron.onCustomCommand({
    command: 'clearQueryCache',
    handler: () => queryClient.clear(),
    title: 'Clear React Query Cache',
    description: 'Limpia el cache de TanStack Query',
  });
}

export default reactotron;
