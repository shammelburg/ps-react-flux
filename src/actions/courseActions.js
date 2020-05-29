import dispatcher from '../appDispatcher'
import * as courseAPI from '../api/courseApi'
import actionTypes from './actionTypes'

export const saveCourse = (course) => {
    return courseAPI.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionType: course.id ? actionTypes.UPDATE_COURSES : actionTypes.CREATE_COURSE,
            course: savedCourse
        })
    })
}

export const loadCourses = () => {
    return courseAPI.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses
        })
    })
}

export const deleteCourse = (courseId) => {
    return courseAPI.deleteCourse(courseId).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            courseId
        })
    })
}