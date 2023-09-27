const popup = document.createElement('div');
popup.setAttribute('id', 'popupContainer')
document.body.appendChild(popup)

$.get("http://www.boredapi.com/api/activity?type=relaxation", (data) => {
    function newQuote() {
        $.get("http://www.boredapi.com/api/activity?type=relaxation", (data) => {
            const quote = document.createElement('p');
            quote.textContent = data.activity + '.';
            quote.classList.add('words')
            popup.prepend(quote);
        })
    }
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    popup.append(removeBtn)
    removeBtn.addEventListener('click', function() {
        if (popup.childNodes.length > 2) {
            popup.removeChild(popup.childNodes[0])
        }
    })

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add'
    popup.append(addBtn)
    addBtn.addEventListener('click', function() {
        if (popup.childNodes.length < 3) {
            newQuote()
        }
    })

    newQuote()
    document.body.append(popup)
    console.log(popup.childNodes.length)

})
