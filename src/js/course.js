class Course {
    constructor({ categoria, rating, lecciones, duracion, estudiantes, titulo, instructor, imagenCurso, imagenPerfil, Teacher }) {
        this.categoria = categoria;
        this.rating = rating;
        this.lecciones = lecciones;
        this.duracion = duracion;
        this.estudiantes = estudiantes;
        this.titulo = titulo;
        this.instructor = instructor;
        this.imagenCurso = imagenCurso;
        this.imagenPerfil = imagenPerfil;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('btn-user');
    const myCoursesButton = document.getElementById('my-courses');

    function toggleMyCoursesButton() {
        myCoursesButton.classList.toggle('hidden');
        myCoursesButton.classList.toggle('visible');
    }

    userIcon.addEventListener('click', toggleMyCoursesButton);

    document.addEventListener('click', (event) => {
        if (event.target !== userIcon && !userIcon.contains(event.target) &&
            event.target !== myCoursesButton && !myCoursesButton.contains(event.target) &&
            myCoursesButton.classList.contains('visible')) {
            toggleMyCoursesButton();
        }
    });
});


