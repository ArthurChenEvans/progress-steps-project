"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const rangeBar = document.querySelector('.range');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');

    if (!rangeBar.style.getPropertyValue('--scale-value')) {
        rangeBar.style.setProperty('--scale-value', '1');
    }

    nextButton.addEventListener('click', () => {
        nextButton.classList.toggle('active');
        let scaleValue = Number(window.getComputedStyle(rangeBar).getPropertyValue('--scale-value'));

        switch (scaleValue) {
            case 1:
                rangeBar.style.setProperty('--scale-value', '35');
                document.getElementById("two").classList.replace('unhighlighted', 'highlighted');
                break;
            case 35:
                rangeBar.style.setProperty('--scale-value', '70');
                document.getElementById("three").classList.replace('unhighlighted', 'highlighted');
                break;
            case 70:
                rangeBar.style.setProperty('--scale-value', '100');
                document.getElementById("four").classList.replace('unhighlighted', 'highlighted');
                break;
            default:
                rangeBar.style.setProperty('--scale-value', '1');
                document.querySelectorAll('.highlighted').forEach(el => {
                    if (!el.id || el.id === 'one') {
                        return;
                    } else {
                        el.classList.replace('highlighted', 'unhighlighted');
                    }
                });
                break;
        }
        nextButton.classList.toggle('active');
    });

    prevButton.addEventListener('click', () => {
        let scaleValue = Number(window.getComputedStyle(rangeBar).getPropertyValue('--scale-value'));

        switch (scaleValue) {
            case 100:
                rangeBar.style.setProperty('--scale-value', '70');
                document.getElementById("four").classList.replace('highlighted', 'unhighlighted');
                break;
            case 70:
                rangeBar.style.setProperty('--scale-value', '35');
                document.getElementById("three").classList.replace('highlighted', 'unhighlighted');
                break;
            case 35:
                rangeBar.style.setProperty('--scale-value', '1');
                document.getElementById("two").classList.replace('highlighted', 'unhighlighted');
                break;
            default:
                rangeBar.style.setProperty('--scale-value', '1');
                break;
        }
    });
});
