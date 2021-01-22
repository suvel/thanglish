import { db } from "../firebase";
const correctSpelling = db.collection("crt_spelling");
//get
export const fetchCrtSpelling = () => correctSpelling.get();
//add
export const addToCrtSpelling = (word) =>
  correctSpelling.add({
    wrd: word,
  });
