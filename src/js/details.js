const TEACHERS_DATA_URL = '/src/data/teachers.json';
const COURSES_DATA_URL = '/src/data/courses.json';


const params = new URLSearchParams(window.location.search);
const courseId = parseInt(params.get('id'));

fetch(COURSES_DATA_URL)
    .then(res => res.json())
    .then(courses => {
        const curso = courses.find(course => course.id === courseId);
        
        if (!curso) {
            console.error('Curso no encontrado');
            document.title = "Curso no encontrado";
            window.location.href = '../../index.html';
            return;
        } else {
            document.title = `${curso.titulo} | EduConnect`;
        }

        fetch(TEACHERS_DATA_URL)
            .then(res => res.json())
            .then(teachers => {
                const teacher = teachers.find(teacher => teacher.id === curso.teacherId);

                if (!teacher) {
                    console.error('Profesor no encontado');
                    return;
                }

                document.querySelector('.course-banner').src = curso.imgCurso;
                document.querySelector('.rating-stars').textContent = `★★★★☆ (${curso.rating})`;
                document.querySelector('.course-title').textContent = curso.titulo;
                document.querySelector('.course-meta').innerHTML = `
                    <span>📄 Lecciones ${curso.lecciones}</span>
                    <span>👨‍🎓 Estudiantes ${curso.estudiantes}+</span>
                `;
                document.querySelector('.course-description p').textContent = curso.descripcion;
                document.querySelector('.teacher-img').src = teacher.imgPerfil;
                document.querySelector('.instructor').textContent = teacher.nombre;
                document.querySelector('.sidebar-credit-value').textContent = curso.creditos;
    });
});