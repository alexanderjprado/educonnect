function crearCardHTML(course) {
  return `
    <div class="course-card">
      <div class="course-image">
        <img src="${course.imagenCurso}" alt="Course Image">
        <span class="badge">${course.categoria}</span>
      </div>

      <div class="course-content">
        <div class="rating-price">
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
            <img src="${course.imagenPerfil}" alt="${course.instructor}" class="instructor-img">
            <span>Por ${course.instructor}</span>
          </div>
          <div class="take-course">
            <a href="#">Tomar curso</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch('./src/data/index.json') // Ruta a tu archivo JSON
    .then(response => response.json())
    .then(data => {
      const courseGrid = document.querySelector(".course-grid");
      let contenidoHTML = '';

      data.forEach(course => {
        contenidoHTML += crearCardHTML(course);
      });

      courseGrid.innerHTML = contenidoHTML;
    })
    .catch(error => {
      console.error('Error con cursos:', error);
    });
});
