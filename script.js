document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const translation = this.textContent;
            alert('Translation: ' + translation);
        });
    });
});
