export const likedPhoto = (name: string, imageUrl: string) => ({
  type: "likedPhoto",
  payload: { name, imageUrl },
});

export const unlikedPhoto = (name: string, imageUrl: string) => ({
  type: "unlikedPhoto",
  payload: { name, imageUrl },
});
