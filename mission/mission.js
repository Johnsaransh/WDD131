const themeSelector = document.querySelector('#theme-select');


function changeTheme() {
    
    const selectedTheme = themeSelector.value;
    
    
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.logo').src = "byui-logo_white.png"; 
    } else {
        document.body.classList.remove('dark');
        document.querySelector('byui.logo').src = "byui-logo_blue.webp"; 
    }
}

themeSelector.addEventListener('change', changeTheme);
