interface IStoreElement {
  name: string;
  imageUrl: string;
}

interface IAction {
  type: string;
  payload: {
    imageUrl: string;
    name: string;
  };
}

function reducer(state: IStoreElement[] = [], action: IAction): any {
  switch (action.type) {
    case "likedPhoto":
      return [
        ...state,
        { name: action.payload.name, imageUrl: action.payload.imageUrl },
      ];
    case "unlikedPhoto":
      return state.filter(
        (image: IStoreElement) => image.imageUrl !== action.payload.imageUrl
      );
    default:
      return state;
  }
}

export default reducer;
