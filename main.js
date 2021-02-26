function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === "all"
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
                item.classList.remove('animation')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.onTransitionEnd = function() {
            const isAnimationOccured = card.classList.contains('animation')
            if (isAnimationOccured) {
                card.classList.add('hide')
            }
        }
    })
}

app ()
