function createStudent(name, year) {
  return newStudent = {
    name,
    year,
    courses: [],
    info() {
      console.log(name + ' is a ' + year + ' year student');
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.find(({code}) => code === courseCode);

      if (course) {
        course.note = course.note ? course.note + `; ${note}` : note;
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(course.name + ': ' + course.note);
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.find(({code}) => code === courseCode);
      
      if (course) {
        course.note = note;
      }
    },
  };
}
