
    function onOff(buttonElement) {
        
        const buttons = document.querySelectorAll('.a');
        
        
        buttons.forEach(button => {
            button.classList.remove('is-toggled');
        });
        
        
        if (!buttonElement.classList.contains('is-toggled')) {
            buttonElement.classList.add('is-toggled');
        }
    }