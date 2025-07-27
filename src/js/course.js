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
