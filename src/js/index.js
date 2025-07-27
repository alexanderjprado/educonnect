import { Teacher } from './course.js'
import { Course } from './course.js'

const TEACHERS_DATA_URL = '/src/data/teachers.json';
const COURSES_DATA_URL = '/src/data/courses.json';

const contenedor = document.querySelector('.course-grid');

let teachers = [];

fetch(TEACHERS_DATA_URL)
  .then(res => res.json())
  .then(data => {
    teachers = data;

    return fetch(COURSES_DATA_URL);
  })
  .then(res => res.json())
  .then(coursesData => {
    let contenidoHTML = '';

    coursesData.forEach(courseData => {
      const teacherData = teachers.find(teacher => teacher.id === courseData.teacherId);

      if (teacherData) {
        const teacher = new Teacher(teacherData.nombre, teacherData.imgPerfil);
        courseData.teacher = teacher;

        const course = new Course(courseData);
        console.log("Rendering course:", course.id);
          contenidoHTML += crearCardHTML(course);
        }
    });

    contenedor.innerHTML = contenidoHTML;
  })
  .catch(error => {
    console.error('Error cargando datos:', error);
  });

export function crearCardHTML(course, linkHref = `/src/html/course.html?id=${course.id}`) {
  return `
    <div class="course-card">
      <div class="course-image">
        <img src="${course.imgCurso}" alt="Course Image">
        <span class="badge">${course.categoria}</span>
      </div>

      <div class="course-content">
        <div class="valoration">
          <span class="stars">★★★★★</span>
          <span class="rating">(${course.rating})</span>
        </div>
        <h4 class="course-title">${course.titulo}</h4>
        <div class="course-info">
          <span>📄 Lecciones ${course.lecciones}</span>
          <span>⏰ ${course.duracion}</span>
          <span>👨‍🎓 Estudiantes ${course.estudiantes}</span>
        </div>

        <div class="course-footer">
          <div class="instructor">
            <img src="${course.teacher.imgPerfil}" alt="${course.teacher.nombre}" class="instructor-img">
            <span>Por ${course.teacher.nombre}</span>
          </div>
          <div class="take-course">
            <a href="${linkHref}">Tomar curso</a>
          </div>
        </div>
      </div>
    </div>
  `;
}