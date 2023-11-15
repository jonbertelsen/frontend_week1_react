import { useState, useEffect } from 'react';

function JokeComponent() {
  // State to store the joke
  const [joke, setJoke] = useState('');
  const [dadJoke, setDadJoke] = useState('');

  function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.error('Error fetching joke:', error));
  }

  function fetchDadJoke() {
    {
      fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => setDadJoke(data.joke))
        .catch((error) => console.error('Error fetching joke:', error));
    }
  }

  // useEffect to fetch the joke
  useEffect(() => {
    fetchJoke();
    fetchDadJoke();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const getJokeId = setInterval(() => {
      fetchJoke();
      fetchDadJoke();
    }, 10000);
    return () => clearInterval(getJokeId);
  }, []);

  // Render the joke
  return (
    <div>
      <h2>Chuck Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Fetch new joke</button>
      <h2>Dad Joke</h2>
      <p>{dadJoke}</p>
    </div>
  );
}

export default JokeComponent;
