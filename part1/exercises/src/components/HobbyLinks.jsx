import React from 'react';

const HobbyLinks = () => {

  const hobbyLinks = [
    'https://www.twitch.tv/directory',
    'https://www.youtube.com/',
  ];

  return (
    <div>
        <h4>Links</h4>
    <ol>
      <a href={hobbyLinks[0]}>Twitch</a><br />
      <a href={hobbyLinks[1]}>Youtube</a><br />
    </ol>
    </div>
  );
}

export default HobbyLinks;