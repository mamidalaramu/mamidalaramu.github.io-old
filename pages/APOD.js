const demo_api="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


async function getAPOS(){
  const response =await fetch(demo_api);
  const data = await response.json();
  const title = data.title;
  const explanation = data.explanation;
  const hdurl = data.url;

  document.getElementById("imageclass").src = hdurl;
  document.getElementById("toi").textContent  = title;
  document.getElementById("doi").textContent = explanation;
  document.getElementById("imageclass").alt = title;
}

document.getElementById("toi").textContent  = "test-title";
document.getElementById("doi").textContent = "This is an example/testto see the font size and weight";
document.getElementById("imageclass").alt = "alt section iamge description";
getAPOS();