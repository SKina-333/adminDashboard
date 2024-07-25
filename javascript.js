document.querySelectorAll('.sidenav .icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});