import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter:new Adapter()
});

//setup Enzyme for supporting react 16
