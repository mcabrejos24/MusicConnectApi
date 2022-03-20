// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


// To render shallow component with hooks, uncomment the first two code below
// Then import the 'withHooks' function to the test file
// And wrap it around your shallow function as shown at the bottom
// Note that hooks will run before the initial render
// and then regularly on updates
// ---------------------------------------------------------------------------
// import enableHooks from 'jest-react-hooks-shallow';
// enableHooks(jest, { dontMockByDefault: true });

// import { withHooks } from 'jest-react-hooks-shallow';

// beforeEach(() => {
//      withHooks(() => {
//         const wrapper = shallow(<Component />);
//      });
// });
