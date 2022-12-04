import './styles.css';
import logo from './logo.png';

export const App = () => {
  return (
    <>
      <img src={logo} alt="logo" width="300" height="200" />
      <h1> React with typescript webpack template - { process.env.NODE_ENV }</h1>
    </>
  )
}