import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import List from './List'

describe('<List />', () => {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<List avatar ='Our header' name = 'Bob' onStage = {true} />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    })



describe('<List />', () => {
  it('renders without crashing', () => {
      // Render the component, as JSON
      const tree = renderer.create(<List avatar ='Our header' name = 'Bob' onStage = {true} />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
});
