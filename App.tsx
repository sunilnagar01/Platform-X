import { StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';


function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </>
  );
}

export default App;
