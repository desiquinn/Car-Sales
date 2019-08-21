import React from 'react';
import { connect } from 'react-redux';
import { removeFeature, buyFeature } from './actions/actions.js';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  console.log('App Props:', props);
  const { state, removeFeature, buyFeature } = props;


  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyFeature={buyFeature}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state
  };
};

export default connect(mapStateToProps, { removeFeature, buyFeature })(App);
