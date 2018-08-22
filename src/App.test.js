import React from 'react'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import App from './App'
import Loader from './components/Loader'
import Statement from './components/Statement'
import Error from './components/Error'
import Button from './components/Button'
import Help from './components/Help'

it('App should render correctly', () => {
  const wrapper = mount(<App/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('App should render initially with correct state', () => {
  const wrapper = mount(<App/>)
  expect(wrapper.instance().state.isLoading).toBe(true)
  expect(wrapper.instance().state.coordinates).toBe(null)
  expect(wrapper.instance().state.location).toBe(null)
  expect(wrapper.instance().state.failed).toBe(false)
  wrapper.unmount()
})

it('Loader should render correctly', () => {
  const wrapper = mount(<Loader/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('Error should render correctly', () => {
  const wrapper = mount(<Error/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('Button should render correctly', () => {
  const wrapper = mount(<Button/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('Help should render correctly', () => {
  const wrapper = mount(<Help/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('Statement should render correctly with given coordinates', () => {
  const wrapper = mount(<Statement coordinates={{latitude: 2, longitude: 3}}/>)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})

it('Statement should render with coordinates and location', () => {
  const wrapper = mount(<Statement coordinates={{latitude: 2, longitude: 3}} location="ABC"/>)
  expect(wrapper.prop('coordinates')).toEqual({latitude: 2, longitude: 3})
  expect(wrapper.prop('location')).toEqual('ABC')
  wrapper.unmount()
})


