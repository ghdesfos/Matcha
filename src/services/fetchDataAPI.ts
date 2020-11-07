import { PersonInfo } from "../types";

// change the input type based on the information provided by the API?
// at least check we receive the necessary fields?
// what should we do in the case where the API returns an empty array?

function addPersonInfoToArray(peopleFeedInfo: PersonInfo[], photo: any) {
  const possibleNames = ["Sophie", "Jasmine", "Emilie", "Alice"];
  let personInfo: PersonInfo = {
    name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
    image: photo.urls.small,
  };
  peopleFeedInfo.push(personInfo);
}

function hydratePeopleFeedInfo(photos: any[]): PersonInfo[] {
  const peopleFeedInfo: PersonInfo[] = [];
  if (typeof photos !== "undefined")
    photos.map((photo) => {
      addPersonInfoToArray(peopleFeedInfo, photo);
    });
  return peopleFeedInfo;
}

async function fetchDataUnsplashAPI(): Promise<PersonInfo[]> {
  const queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10" +
    "&client_id=" +
    process.env["REACT_APP_UNSPLASH_API_TOKEN"];

  let peopleFeedInfo: PersonInfo[] = [];

  try {
    const res = await fetch(queryUrlAPI);

    console.log("result", res);
    var result = await res.json();
  } catch (err) {
    console.error(err);
  }

  peopleFeedInfo = hydratePeopleFeedInfo(result);
  return peopleFeedInfo;
}

export default fetchDataUnsplashAPI;
