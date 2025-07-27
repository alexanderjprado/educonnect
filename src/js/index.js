import { Teacher } from './course.js'
import { Course } from './course.js'


const contenedor = document.querySelector('.course-grid');

let teachers = [];

fetch('./src/data/teachers.json')
  .then(res => res.json())
  .then(data => {
    teachers = data;

    return fetch('./src/data/courses.json');
  })
  .then(res => res.json())
  .then(coursesData => {
    let contenidoHTML = '';
    let counter = 0;

    coursesData.forEach(courseData => {
      if (counter < 3) {
        const teacherData = teachers.find(t => t.id === courseData.teacherId);

      // Si existe el profesor, lo asociamos al curso
        if (teacherData) {
          const teacher = new Teacher(teacherData.nombre, teacherData.imgPerfil);
          courseData.teacher = teacher;

          const course = new Course(courseData);
          contenidoHTML += crearCardHTML(course);
          counter++;
        }
      }
    });

    contenedor.innerHTML = contenidoHTML;
  })
  .catch(error => {
    console.error('Error cargando datos:', error);
  });

function crearCardHTML(course) {
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
            <a href="/educonnect/src/html/login.html">Tomar curso</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
