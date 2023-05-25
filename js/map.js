function navigateTo(url) {
    window.location.href = url;
}

window.addEventListener('resize', positionButtons);

function positionButtons() {
    var mapImage = document.querySelector('.map-image');
    var buttonContainer = document.querySelector('.button-container');
    var mapWidth = mapImage.offsetWidth;
    var mapHeight = mapImage.offsetHeight;

    var buttons = document.querySelectorAll('.map-button');
    buttons.forEach(function(button) {
        var buttonX = parseFloat(button.style.left) / 100 * mapWidth;
        var buttonY = parseFloat(button.style.top) / 100 * mapHeight;
        button.style.left = buttonX + 'px';
        button.style.top = buttonY + 'px';
    });
}

// Initial positioning of buttons
positionButtons();
