const rating = document.querySelectorAll(".rate-num");

function clickColor(num) {
    rating.forEach((el, index) => {
        if (index == num - 1) {
            if (el.classList.contains("selected")) el.classList.remove("selected");
            else el.classList.toggle("selected");
        } else {
            if (el.classList.contains("selected")) el.classList.remove("selected");
        }
    });
}

function setRate() {
    rating.forEach((el, index) => {
        if (el.classList.contains("selected")) {
            const rate = index + 1
            const card = document.querySelector(".card");
            card.classList.remove("card")
            card.classList.add("thanks-card")
            card.innerHTML = `<img src="images/illustration-thank-you.svg" alt="illustration-thank-you">
                                <div class="rate-result">
                                    You selected ${rate} out of 5 
                                </div>
                                <h1>Thank you!</h1>
                                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`
        }
    })
}