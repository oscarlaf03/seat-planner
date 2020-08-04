import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import SeatsForm from '../SeatsForm';
// import configureStore from '.../configureStore';
// import configureStore from "../configureStore.js";

const store = configureStore();

test('there is SeatsForm component', ()=>{
    //rendering test component
    console.log('\n\nthis is me testing\n\n')
    const seatsForm = shallow(<SeatsForm  store={store}/>)
    expect(2 + 2).toBe(4);

});