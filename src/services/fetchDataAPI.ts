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
// This function does not work
// it seems that the function execution finishes and thus peopleFeedInfo returns empty
// is there a way to do this without an async function?

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
    .then((result) => (peopleFeedInfo = hydratePeopleFeedInfo(result)));

  //manage possible errors, and check the status code before...

  //TBD
  console.log("second", peopleFeedInfo);

  return peopleFeedInfo;
}
*/

async function fetchDataUnsplashAPI(): Promise<PersonInfo[]> {
  // put it inside a constant file?
  const queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10" +
    "&client_id=" +
    process.env["REACT_APP_UNSPLASH_API_TOKEN"];

  let peopleFeedInfo: PersonInfo[] = [];

  const res = await fetch(queryUrlAPI);
  const result = await res.json();

  peopleFeedInfo = hydratePeopleFeedInfo(result);

  //manage possible errors, and check the status code before...

  //TBD
  console.log(peopleFeedInfo);

  return peopleFeedInfo;
}

export default fetchDataUnsplashAPI;
