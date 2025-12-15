import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron
  .configure({
    name: 'CatBreedsRNApp',
  })
  .useReactNative()
  .connect();

export default reactotron;
