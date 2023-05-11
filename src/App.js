import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Container from './components/Container';
import List from './components/List';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Container></Container>
      </section>
      <footer>{/* <Form /> */}</footer>
    </>
  );
}

export default App;
