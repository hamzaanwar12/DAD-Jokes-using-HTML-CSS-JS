let replacingJoke
let joke = document.getElementById("Joke")
let button = document.querySelector("button")

button.addEventListener("click", () => 
{
    let jokePromise = fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    console.log(joke)
    jokePromise.then((value) => {
        return value.json();
    }).then((value) => {
        console.log(value)
        joke.innerHTML = `"${value.joke}"`
    })
})
