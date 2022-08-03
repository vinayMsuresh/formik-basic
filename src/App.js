import './App.css';
import CourseForm from './components/CourseForm';
import FormikComp from './components/FormikComp';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegistrationForm';
import YoutubeForm from './components/YoutubeForm';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <p>Login form</p>
        <LoginForm />
      </ChakraProvider>
    </div>
  );
}

export default App;
