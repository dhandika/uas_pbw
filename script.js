const container = document.querySelector('.container')
const seats = document.querySelector('.row .seat:not(.sold)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movie select = document.getElementById("movie");


populateUI()

let ticketprice = +movieselect.nodeValue;

function setMovieData(movieIndex, movieprice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedmoviePrice", moviepricee);
}
function updateselectedcount(){
    const selectedSeats = document.queryselected('.row .seat.selected')

    const seatsIndex =[...selectedseats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatscount = selectedSeats.length

    count.innerText = selectedSeatscount
    total.innerText = selectedSeatsCount * ticketprice

    setMovieData(movieselect.selectedIndex, movieselect.value);
}

function populateUI() {
    const selectedSeats = JSON.parse(localstorage.getItem('selectedSeats'))

    if(selectedSeats !== null && selectedSeats.length > -1) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexof(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localstorage.getItem('selectedMovieIndex')

    if (selectedMovieIndex !== null) {
        movieselect.selectedIndex = selectedMovieIndex;
    }
}


movieselect.addEventListener('change', e => {
    ticketprice =+e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
    updateselectedcount()
})

container.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat')&&
        !e.target.classList.contains("sold")
    ) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

updateselectedcount();