import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('div', { className: 'me' },
    React.createElement('h1', {}, 'An Awesome Person' ),
    React.createElement('p', {}, 'Who is learning React' ),
    React.createElement('ul', { className: 'my-interests' },
      [
        React.createElement('li', { className: 'brown' }, 'JavaScript'),
        React.createElement('li', { className: 'white' }, 'React'),
        React.createElement('li', { className: 'yellow' }, 'Movies'),
          React.createElement('li', { className: 'yellow' }, 'Ice cream')
      ]
    )
  );

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
