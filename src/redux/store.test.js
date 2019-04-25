import { createStore } from 'redux'
import rootReducer from './reducers'
import initialState from './reducers/initialState'
import * as courseActions from './actions/courseActions'

it('should handle creating courses', function() {
  // arrange
  const store = createStore(rootReducer, initialState)
  const course = {
    title: 'Clean Code'
  }

  // act
  const action = courseActions.createCourseSuccess(course)
  store.dispatch(action)

  // assert
  const createdCourse = store.getState().courses[0]
  expect(createdCourse).toEqual(course)
})

it('should handle creating multiple courses', function() {
  // arrange
  const store = createStore(rootReducer, initialState)
  const course = {
    id: 1,
    title: 'Clean Code'
  }
  const course2 = {
    title: 'Clean Code 2'
  }
  const update = {
    id: 1,
    title: 'New Title'
  }

  // act
  const actions = [
    courseActions.createCourseSuccess(course),
    courseActions.createCourseSuccess(course2),
    courseActions.updateCourseSuccess(update)
  ]

  actions.map(action => {
    store.dispatch(action)
  })

  // assert
  const createdCourse = store.getState().courses[0]
  expect(createdCourse).toEqual(update)
  expect(store.getState().courses.length).toEqual(2)
})
