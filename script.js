function makeQuoteButton() {
    const btn = document.createElement()
    const quoteBtn = document.createElement('button');
    quoteBtn.classList.add('button')
    quoteBtn.textContent = 'Click Me';
    quoteBtn.addEventListener('click', ()=>{
        document.body.removeChild(quoteBtn)
        quoteGenerate()
    })
    document.body.appendChild(quoteBtn);
}

function makeQuote(data) {
    const popup = document.createElement('div');
    
    popup.classList.add('button')


    const quote = document.createElement('p');
    quote.textContent = data.activity + '.';
    // quote.classList.add('words')
    setTimeout(function() {
        document.body.removeChild(popup)
        makeQuoteButton()
    }, 5000)
    popup.append(quote);
    document.body.append(popup)
}

function quoteGenerate(){
    $.get("https://www.boredapi.com/api/activity?type=relaxation", (data) => {
        makeQuote(data);
    })}

makeQuoteButton()