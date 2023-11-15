/* eslint-disable react/prop-types */

import { persons } from './file2';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson({ person }) {
  return (
    <>
      <p>
        Firstname: {person.firstName}, Lastname: {person.lastName}
      </p>
    </>
  );
}

export function MultiWelcome() {
  return (
    <div>
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />

      <ul>
        {persons.map((p) => (
          <li key={p.firstName}>
            <WelcomePerson person={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
