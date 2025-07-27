fetch('./src/data/courses.json')
    .then(res => res.json())
    .then(courses => {
        return fetch('./src/data/teachers.json')
            .then(res => res.json())
            .then(teachers => {
                const cursosCompletos = courses.map(curso => {
                    const teacher = teachers.find(t => t.id === curso.teacherId);
                    return {
                        ...curso,
                        teacher: {
                            nombre: teacher.nombre,
                            imgPerfil: teacher.imgPerfil
                        }
                    };
                });

                const contenedor = document.querySelector('.course-grid');
                cursosCompletos.forEach(course => {
                    const cardHTML = crearCardHTML(course);
                    contenedor.innerHTML += cardHTML;
                });
                contenedor.innerHTML = cursosCompletos.map(crearCardHTML).join('');
            });
    })
    .catch(error => console.error("Error cargando datos:", error));

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
            <a href="./course.html?id=${course.id}">Tomar curso</a>
          </div>
        </div>
      </div>
    </div>
  `;
}