const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

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
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        // full cups / total cups * height of bigCup
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        // goal - 1 cup (250 ml) * fullCups / 1000 (convert to liters) = remaining
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}