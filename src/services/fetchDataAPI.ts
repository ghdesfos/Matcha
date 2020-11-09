import { PersonInfo } from "../types";

let checkAllNecessaryFieldsIncluded = function (photo: any): boolean {
  if (!photo.urls.small) return false;
  return true;
};

function addPersonInfoToArray(peopleFeedInfo: PersonInfo[], photo: any) {
  const possibleNames = ["Sophie", "Jasmine", "Emilie", "Alice"];
  if (!checkAllNecessaryFieldsIncluded(photo)) return;
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
    var result = await res.json();
  } catch (err) {
    console.error(err);
  }

  peopleFeedInfo = hydratePeopleFeedInfo(result);
  return peopleFeedInfo;
}

export default fetchDataUnsplashAPI;
