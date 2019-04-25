import React from 'react'
import { mount } from 'enzyme'
import { authors, newCourse, courses } from '../../../tools/mockData'
import { ManageCoursePage } from './ManageCoursePage.jsx'

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // passed from React Router in the real app, stubbing out for test.
    // could've used MemoryRouter as seen in Header.test.js
    // or wrap this with React Router depending on if I need to test that.
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {}
  }

  const props = { ...defaultProps, ...args }

  return mount(<ManageCoursePage {...props} />)
}

it('sets error when attempting to save an empty title field', () => {
  const wrapper = render()
  wrapper.find('form').simulate('submit')
  const error = wrapper.find('.alert').first()
  expect(error.text()).toBe('Title is required')
})
