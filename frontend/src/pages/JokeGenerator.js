import React, { useState } from 'react';
import axios from 'axios';
import '../styles/JokeGenerator.css';
import { FaLaugh, FaShare2 } from 'react-icons/fa';

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [jokeType, setJokeType] = useState('any');

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    setJoke(null);

    try {
      const apiUrl = `https://v2.jokeapi.dev/joke/Any?type=${jokeType}`;
      const response = await axios.get(apiUrl);

      if (response.data.error) {
        setError('No joke found. Please try again!');
      } else {
        setJoke(response.data);
      }
    } catch (err) {
      setError('Failed to fetch joke. Please check your internet connection.');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  const shareJoke = () => {
    if (!joke) return;

    let jokeText = '';
    if (joke.type === 'single') {
      jokeText = joke.joke;
    } else if (joke.type === 'twopart') {
      jokeText = `${joke.setup} ${joke.delivery}`;
    }

    if (navigator.share) {
      navigator.share({
        title: 'Check out this joke!',
        text: jokeText,
      });
    } else {
      navigator.clipboard.writeText(jokeText);
      alert('Joke copied to clipboard!');
    }
  };

  return (
    <div className="joke-generator">
      <div className="joke-container">
        <div className="joke-header">
          <FaLaugh className="joke-icon" />
          <h1>Joke Generator</h1>
          <p>Get a random joke to brighten your day!</p>
        </div>

        <div className="joke-controls">
          <div className="joke-type-selector">
            <label>Joke Type:</label>
            <select value={jokeType} onChange={(e) => setJokeType(e.target.value)} disabled={loading}>
              <option value="any">Any</option>
              <option value="single">Single Line</option>
              <option value="twopart">Two Part</option>
            </select>
          </div>
          <button onClick={fetchJoke} disabled={loading} className="generate-btn">
            {loading ? 'Loading...' : 'Get a Joke'}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {joke && (
          <div className="joke-display">
            <div className="joke-content">
              {joke.type === 'single' ? (
                <p className="joke-text">{joke.joke}</p>
              ) : (
                <>
                  <p className="joke-setup">{joke.setup}</p>
                  <div className="joke-divider"></div>
                  <p className="joke-delivery">{joke.delivery}</p>
                </>
              )}
            </div>

            <div className="joke-actions">
              <button onClick={shareJoke} className="share-btn">
                <FaShare2 /> Share
              </button>
              <button onClick={fetchJoke} className="next-btn">
                Next Joke
              </button>
            </div>

            <div className="joke-info">
              <p>Category: <span>{joke.category}</span></p>
              <p>Type: <span>{joke.type}</span></p>
            </div>
          </div>
        )}

        {!joke && !error && !loading && (
          <div className="joke-placeholder">
            <p>Click the button above to get a random joke!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeGenerator;
