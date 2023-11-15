import './App.css';
import upper from './file1';
import { text1, text2, text3 } from './file1';
import person from './file2';
import { males, females } from './file2';
import { MultiWelcome } from './file3';
import { WelcomePerson } from './file3';
import JokeComponent from './chuck';

function App() {
  const { firstName, email } = person;

  console.log([...males, ...females]);
  console.log([...males, 'Kurt', ...females, 'Sarah', 'Tina']);
  const personV2 = {
    ...person,
    phone: 123456,
    friends: [...males, ...females],
  };
  console.log(personV2);

  return (
    <>
      <h2>Ex 1</h2>
      <p>{upper('please uppercase me')}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>

      <h2>Ex 3</h2>
      <MultiWelcome />

      <h2>Chuck</h2>
      <JokeComponent />
    </>
  );
}

export default App;
