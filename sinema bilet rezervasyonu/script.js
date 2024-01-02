const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".seat.selected");

  const selectedSeatsArr = Array.from(selectedSeats);
  const seatsArr = Array.from(seats);

  const selectedSeatsIndex = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  amount.innerText = selectedSeatsCount * select.value;

  saveToLocalStorage(selectedSeatsIndex);
}

function saveToLocalStorage(indexes) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexes));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}

function getFromLocalStorage() {
  const selectedSeatsIndexes = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeatsIndexes != null && selectedSeatsIndexes.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeatsIndexes.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex != null) {
    select.selectedIndex = selectedMovieIndex;
  }
}
