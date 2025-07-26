let guideContent = document.querySelector('.guide-content');
let showGuideButton = document.querySelector('.show-guide-button');

showGuideButton.addEventListener('click', function () {
    guideContent.style.display = 'block';
    showGuideButton.style.display = 'none';
})