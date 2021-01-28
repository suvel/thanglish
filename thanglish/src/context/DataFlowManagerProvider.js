import { useContext, useEffect, createContext } from "react";
import { LoadingContext } from "./LoadingProvider";
import { WordContext } from "./WordProvider";
import { fetchCrtSpelling, addToCrtSpelling } from "../collection/crtSpelling";

export const DataFlowManagerContext = createContext(null);

const fetchWords = async (setLoading, setWords) => {
  let spellings = [];
  setLoading(true);
  await fetchCrtSpelling()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        spellings.push({ id: doc.id, ...doc.data() });
      });
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.table({ type: "Error", errObj: err });
    });
  setWords(spellings);
};

const addGvnWrdToWords = async (wrd, setLoading, setWords) => {
  await addToCrtSpelling(wrd)
    .then(function (docRef) {
      setLoading(false);
      setWords({ id: docRef.id, wrd: wrd });
    })
    .catch(function (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
    });
};

const DataFlowManagerProvider = ({ children }) => {
  const { wordList, setWordList } = useContext(WordContext);
  const { setLoading } = useContext(LoadingContext);

  const addWord = (wrd) => {
    if (!wrd && wrd === "") return;
    return new Promise(function (resolve, reject) {
      const lowCaseWrd = wrd.toLowerCase();
      addGvnWrdToWords(lowCaseWrd, setLoading, (wrdObj) => {
        if (!wrdObj) return;
        const { id, wrd } = wrdObj;
        let clonedWrdList = [...wordList];
        console.log(wrd)
        clonedWrdList.unshift({ id, wrd });
        setWordList(clonedWrdList);
        resolve();
      });
    });
  };

  useEffect(() => {
    fetchWords(setLoading, (wrds) => {
      setWordList(wrds);
    });
  }, []);
  return (
    <DataFlowManagerContext.Provider value={{ addWord }}>
      {children}
    </DataFlowManagerContext.Provider>
  );
};

export default DataFlowManagerProvider;
