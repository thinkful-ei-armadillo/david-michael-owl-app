import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Chat from './Chat'

describe('<Chat />', () => {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Chat type='string' timestamp={2} name='steve' avatar = 'image string'  />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    })



describe('<Chat />', () => {
  it('renders without crashing', () => {
      // Render the component, as JSON
      const tree = renderer.create(<Chat type='string' timestamp={2} name='steve' avatar = 'image string'  />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
});
