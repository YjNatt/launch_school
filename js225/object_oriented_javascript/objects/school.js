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

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseCode, grade) {
    const course = student.listCourses().find(({ code }) => code === courseCode);
    if (course) course.grade = grade;
  },

  getReportCard(student) {
    student.listCourses().forEach(({ name, grade }) => {
      console.log(`${name}: ` + grade === undefined ? 'In progress' : grade);
    });
  },

  courseReport(courseName) {
    let grades = [];
    const courseStudents = this.students.filter(student => {
      return student.listCourses.some(({ name, grade }) => {
        return name === courseName && grade !== undefined;
      });
    });

    if (courseStudents.length === 0) return;

    console.log('=' + courseName + '=');
    courseStudents.forEach(student => {
      const grade = student.courseList.find(({ name }) => name === courseName).grade;
      grades.push(grade);
      console.log(student.name + ': ' + grade);
    });

    let average = grades.reduce((total, grade) => grade + total) / grades.length;
    console.log('---');
    console.log('Course Average: ' + average);
  },
}

