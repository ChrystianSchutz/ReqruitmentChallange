import React from 'react';
import { shallow } from 'enzyme';
import NoteWithdrawal from '../../pages/index'

describe('<NoteWithdrawal />', () => {
    it('renders', () =>{
        const wrapper = shallow(<NoteWithdrawal />);
        
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.find('button').exists()).toBeTruthy()
        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.find('.form').exists()).toBeTruthy()

    })
    
    it('should render error message', () =>{
        const wrapper = shallow(<NoteWithdrawal />);
        const exampleErrorMsg = 'exampleErrorMsg'
        expect(wrapper.find('.error').exists()).toBeFalsy()
        
        wrapper.setState({ error: exampleErrorMsg });
        
        expect(wrapper.find('.error').exists()).toBeTruthy()
        expect(wrapper.find('.error').text()).toBe(`Error: ${exampleErrorMsg}`)
    })

    it('should render notes', () =>{
        const wrapper = shallow(<NoteWithdrawal />);
        const exampleNotes = [100,20,10]
        expect(wrapper.find('.note').exists()).toBeFalsy()
        
        wrapper.setState({ usedNotes: exampleNotes });
        
        expect(wrapper.find('.note').length).toBe(3)
        expect(wrapper.find('.note').at(0).text()).toBe('100')
        expect(wrapper.find('.note').at(1).text()).toBe('20')
        expect(wrapper.find('.note').at(2).text()).toBe('10')

    })
})