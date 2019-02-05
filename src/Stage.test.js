import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Stage from './Stage'

describe('<Stage />', () => {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Stage avatar ='Our header' name = 'Bob' />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    })



describe('<Stage />', () => {
  it('renders without crashing', () => {
      // Render the component, as JSON
      const tree = renderer.create(<Stage avatar ='Our header' name = 'Bob' />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/App.test.js.snap
      expect(tree).toMatchSnapshot(); 
  });
});
