import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import faker from 'faker';
import DetailCard from './components/DetailCard';
import CardDeck from 'react-bootstrap/CardDeck';

const App = () => {
  return (
    <div className="container">
        <h2>Related Articles</h2>
        <p style={{ width: '40rem' }}>{faker.lorem.lines()}</p>
        <CardDeck>
          <DetailCard color="danger" date="12 Sep 2018" title="Love of learning, art keys to a great year for Gwen"
            text={faker.lorem.paragraph()} />
          <DetailCard color="info" date="28 Sep 2018" title="Curious mind leads the way for carer Jill"
            text={faker.lorem.paragraph()} />
          <DetailCard color="success" date="12 Sep 2018" title="Celebrating our volunteers"
            text={faker.lorem.paragraph()} />
        </CardDeck>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
