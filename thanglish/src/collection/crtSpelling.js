import { db } from "../firebase";
const correctSpelling = db.collection("crt_spelling");
//get
export const fetchCrtSpelling = () => correctSpelling.orderBy("wrd").get();
//get available spelling matching with gvn. wrd
export const fetchCrtSpellingGvnWrd = (wrd) => correctSpelling.orderBy("wrd").startAt(wrd).endAt(wrd+'\uf8ff').get();
//add
export const addToCrtSpelling = (word) =>
  correctSpelling.add({
    wrd: word,
  });
