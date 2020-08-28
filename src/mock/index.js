import Mock from 'mockjs'
import User from './user'

Mock.mock('login', 'post', (req) => {
  return User.result
})

Mock.mock('index', 'get', () => {
  console.log(User.menus)
  return User.result
})

Mock.mock('ChooseCourse?majorid=200', 'get', () => {
  console.log(User.course)
  return User.course
})

Mock.mock('ChooseMajor', 'get', () => {
  console.log(User.major)
  return User.major
})

Mock.mock('CourseSelection?courseid=200101', 'get', () => {
  console.log('收到选择课程')
  return User.course1
})