export class Teacher {
    constructor(nombre, imgPerfil) {
        this.nombre = nombre;
        this.imgPerfil = imgPerfil;
    }
}

export class Course {
    constructor({ id, categoria, carrera, rating, lecciones, duracion, estudiantes, titulo, imgCurso, teacher}) {
        this.id = id;
        this.categoria = categoria;
        this.carrera = carrera;
        this.rating = rating;
        this.lecciones = lecciones;
        this.duracion = duracion;
        this.estudiantes = estudiantes;
        this.titulo = titulo;
        this.imgCurso = imgCurso;
        this.teacher = teacher;
    }
}

/* document.addEventListener('DOMContentLoaded', () => {
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
}); */


