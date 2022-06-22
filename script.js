const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    // if the cup selected has the class of full and the next cup does not have the full class take the current index and decrement by 1
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    // idx2 is equal to the index of each cup in the inner loop, not the index of the cup that was clicked
    smallCups.forEach((cup, idx2) => {
        // if there are cups before the cup that was clicked add class of full
        if (idx2 <= idx) {
            cup.classList.add('full')

        } else {
            cup.classList.remove('full')
        }
    })
}