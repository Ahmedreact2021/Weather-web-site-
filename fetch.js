class Fetch {
  async getCurrent(input) {
      const myKey = "31b4290d5965f9902881f1c532afeb01";


    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
