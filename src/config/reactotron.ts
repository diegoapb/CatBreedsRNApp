import Reactotron from 'reactotron-react-native';
import { queryClient } from './queryClient';
import reactotronZustand from 'reactotron-plugin-zustand';
import { useBreedsStore } from '../store/breedsStore';

const reactotron = Reactotron
  .configure({
    name: 'CatBreedsRNApp',
  })
  .useReactNative()
  .use(
    reactotronZustand({
      stores: [{ name: 'breeds', store: useBreedsStore }],
      omitFunctionKeys: true,
    })
  )
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
