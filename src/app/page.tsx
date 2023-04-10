'use client';

import Image from 'next/image';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

const mont = Montserrat({
  weight: '200',
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  const boxColors = [
    'DeepPink',
    'DeepSkyBlue',
    'DarkOrchid',
    'CornflowerBlue',
    'FireBrick',
    'HotPink',
    'LightCoral',
    'RoyalBlue',
    'SpringGreen',
    '#FFBE0B',
    '#FB5607',
    '#FF006E',
    '#8338EC',
    '#70D6FF',
    '#FF70A6',
    '#FF9770',
    '#FFD670',
    '#E9FF70',
  ];

  useEffect(() => {
    updateQuote();
  }, []);

  const randomColor = (colors: string | any[]) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [bgColor, setBgColor] = useState(randomColor(boxColors));
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const appStyle = {
    backgroundColor: bgColor,
    padding: '10px',
    fontFamily: 'Arial',
    height: 'auto',
    width: 'auto',
  };
  const bgStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: bgColor,
  };

  const boxStyle = {
    backgroundColor: 'white',
    maxWidth: 'auto',
    width: 'auto',
    height: 'auto',
    borderRadius: '5.6px',
  };

  async function updateQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error(error);
      setQuote('Oops... Something went wrong');
    }
  }

  function handleClick() {
    const color = randomColor(boxColors);
    setBgColor(color);
    updateQuote();
  }
  return (
    <>
      <main
        className={styles.main}
        style={mont.style}
      >
        <div
          id='bg-box'
          style={bgStyle}
        >
          <div
            id='quote-box'
            style={boxStyle}
            className='fade-in'
          >
            <Text
              quote={quote}
              textColor={bgColor}
            />
            <Author
              author={author}
              authorColor={bgColor}
            />
            <div id='new-quote'>
              <TweetButton
                buttonColor={bgColor}
                author={author}
                quote={quote}
              />
              <FacebookButton
                buttonColor={bgColor}
                author={author}
                quote={quote}
              />
              <NewQuoteButton
                id='btn'
                onClick={handleClick}
                buttonColor={bgColor}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Text({ quote, textColor }: { quote: string; textColor: string }) {
  const finalColor =
    textColor === '#FFD670' ||
    textColor === '#E9FF70' ||
    textColor === '#FFBE0B'
      ? '#5A5A5A'
      : textColor;

  const textStyle = { color: finalColor };

  return (
    <div id='text'>
      <q style={textStyle}>{quote}</q>
    </div>
  );
}

const Author = ({
  author,
  authorColor,
}: {
  author: string;
  authorColor: string;
}) => {
  const finalColor =
    authorColor === '#FFD670' ||
    authorColor === '#E9FF70' ||
    authorColor === '#FFBE0B'
      ? '#5A5A5A'
      : authorColor;

  const authorStyle = {
    color: finalColor,
    marginRight: '6px',
  };

  return (
    <div id='author'>
      <p style={authorStyle}>- {author}</p>
    </div>
  );
};

const NewQuoteButton = ({
  id,
  onClick,
  buttonColor,
}: {
  id: string;
  onClick: any;
  buttonColor: string;
}) => {
  const finalColor =
    buttonColor === '#FFD670' ||
    buttonColor === '#E9FF70' ||
    buttonColor === '#FFBE0B'
      ? '#36454F'
      : 'white';

  const buttonStyle = {
    color: finalColor,
    backgroundColor: buttonColor,
    fontSize: '16px',
    padding: '6px',
    margin: '6px',
    borderRadius: '10px',
    textDecoration: 'none',
    marginRight: '6px',
    boxShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    border: 0,
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={onClick}
      >
        New Quote
      </button>
    </div>
  );
};

const TweetButton = ({
  buttonColor,
  quote,
  author,
}: {
  buttonColor: string;
  quote: string;
  author: string;
}) => {
  const tweetButtonStyle = {
    color: buttonColor,
  };

  const tweetLink =
    'https://twitter.com/intent/tweet?text=' +
    '"' +
    quote +
    '"' +
    '\n - ' +
    author;

  return (
    <>
      <a
        id='tweet-quote'
        style={tweetButtonStyle}
        href={tweetLink}
      >
        <i className='fa fa-twitter fa-2x'></i>
      </a>
    </>
  );
};

const FacebookButton = ({
  buttonColor,
  quote,
  author,
}: {
  buttonColor: string;
  quote: string;
  author: string;
}) => {
  const fbButtonStyle = {
    color: buttonColor,
  };

  const url = 'https://www.facebook.com/sharer/sharer.php?u=';

  return (
    <>
      <a
        id='fb-quote'
        style={fbButtonStyle}
        href={url}
      >
        <i className='fa fa-facebook fa-2x'></i>
      </a>
    </>
  );
};
