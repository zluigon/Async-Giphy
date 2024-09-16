require("dotenv").config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);
export async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    let result = await fetch(endpoint);
    let data = await result.json();
    let arr = data.data.map((element) => element.images.original.url);

    return arr;
  } catch (error) {
    console.log(error);
  }
}

async function logResult() {
  console.log(await getImage("dog"));
}

logResult();
