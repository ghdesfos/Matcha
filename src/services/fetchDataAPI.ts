import { PersonInfo } from "../types";

// change the input type based on the information provided by the API?
// at least check we receive the necessary fields?
// what should we do in the case where the API returns an empty array?

function hydratePeopleFeedInfo(photos: any[]): PersonInfo[] {
  const possibleNames = ["Sophie", "Jasmine", "Emilie", "Alice"];
  const peopleFeedInfo: PersonInfo[] = [];

  if (typeof photos !== "undefined")
    photos.map((photo) => {
      let personInfo: PersonInfo = {
        name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
        image: photo.urls.small,
      };
      peopleFeedInfo.push(personInfo);
    });

  //TBD
  console.log("first", peopleFeedInfo);

  return peopleFeedInfo;
}

/*
// THIS IS THE V1 FUNCTION: with callbacks, returning inside and outside the callbacks

// it seems that the function returns before that the array gets populated

function fetchDataUnsplashAPI(): PersonInfo[] {
  // put it inside a constant file?
  const queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10" +
    "&client_id=" +
    process.env["REACT_APP_UNSPLASH_API_TOKEN"];

  let peopleFeedInfo: PersonInfo[] = [];

  fetch(queryUrlAPI)
    .then((res) => res.json())
    //.then((result) => console.log("mid", hydratePeopleFeedInfo(result)));
    .then((result) => {
      console.log("first", window.performance.now());
      peopleFeedInfo = hydratePeopleFeedInfo(result);

      // returning here does not work as the function has already returned before...
      // and when it returns below the array had not been populated...
      return peopleFeedInfo;
    });

  //manage possible errors, and check the status code before...

  //TBD
  console.log("second", peopleFeedInfo);
  console.log("second", window.performance.now());

  return peopleFeedInfo;
}

*/

//THIS IS THE V1 BIS FUNCTION: callbacks but returning a promise

function fetchDataUnsplashAPI(): Promise<PersonInfo[]> {
  // put it inside a constant file?
  const queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10" +
    "&client_id=" +
    process.env["REACT_APP_UNSPLASH_API_TOKEN"];

  let peopleFeedInfo: PersonInfo[] = [];

  return fetch(queryUrlAPI)
    .then((res) => res.json())
    .then((result) => {
      peopleFeedInfo = hydratePeopleFeedInfo(result);

      // it seem that we get here the same behaviour as the async function
      // at least we return a promise as in the async function
      // is there a difference?
      return peopleFeedInfo;
    });
  // catch block does not work
  //    .catch((err) => {
  //      console.error();
  //    });

  //manage possible errors, and check the status code before...
}

/*
//THIS IS THE V2 FUNCTION: async function

async function fetchDataUnsplashAPI(): Promise<PersonInfo[]> {
  // put it inside a constant file?
  const queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10" +
    "&client_id=" +
    process.env["REACT_APP_UNSPLASH_API_TOKEN"];

  let peopleFeedInfo: PersonInfo[] = [];

  try {
    const res = await fetch(queryUrlAPI);
    var result = await res.json();
  } catch (err) {
    console.error(err);
  }

  peopleFeedInfo = hydratePeopleFeedInfo(result);
  return peopleFeedInfo;
}
*/

export default fetchDataUnsplashAPI;
