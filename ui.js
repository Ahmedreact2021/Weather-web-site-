class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
      this.defaultCity = "Karlstad";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 20rem;" >
            <div class="card-body justify-content-center">
                <h5 class="card-title" style="color:MediumSeaGreen;" > The City Name : ${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">  the temperature is a Higher of   ${data.main.temp_max}.° and  Lows of ${data.main.temp_min} °</h6>



<p class="card-text "  style="color:blue;" >Weather conditions are described as: ${data.weather[0].description}</p>


<p class="card-text "  style="color:Violet;" >temperature approx :  ${data.main.temp} </p>


<p class="card-text " style="color:Gray;">Weather pressure is described approx : ${data.main.pressure}</p>

<p class="card-text " style="color:black;" >Weather wind speed  is described approx : ${data.wind.speed}</p>




<p class="card-text " style="color:red;" >The humidity of the weather is approx: ${data.main.humidity}</p>
            </div>
        </div>


        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
