var darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

export function changeDarkMode() {
    darkMode = !darkMode;
    if (!darkMode) {
        document.documentElement.style.setProperty('--main-color', 'rgb(243, 231, 231)');
        document.documentElement.style.setProperty('--secondary-color', '#323232');
        document.getElementById('dark-light-mode').innerHTML = '<i class="fa fa-moon" aria-hidden="true"></i>';
         
    } else {
        document.documentElement.style.setProperty('--main-color', '#191919');
        document.documentElement.style.setProperty('--secondary-color', '#ECDBBA');
        document.getElementById('dark-light-mode').innerHTML = '<i class="fa fa-sun" aria-hidden="true"></i>';
    }

}