function crearCardHTML(course) {
    return `
    <div class="course-card">
      <img src="${course.imgCurso}" alt="${course.titulo}" class="course-image" />
      <span class="badge">${course.categoria}</span>
      <h3 class="course-title">${course.titulo}</h3>
      <div class="course-footer">
        <img src="${course.teacher.imgPerfil}" alt="${course.teacher.nombre}" class="course-teacher-img" />
        <span>${course.teacher.nombre}</span>
      </div>
      <a href="./course.html?id=${course.id}" class="course-link">Ver curso</a>
    </div>
  `;
}

fetch('../data/courses.json')
    .then(res => res.json())
    .then(courses => {
        return fetch('../data/teachers.json')
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
    .catch(err => console.error("Error cargando datos:", err));