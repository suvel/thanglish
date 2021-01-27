import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/LoadingProvider";
import { WordContext } from "../context/WordProvider";
import { fetchCrtSpelling } from "../collection/crtSpelling";

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

const DataFlowManager = ({ children }) => {
  const { setWordList } = useContext(WordContext);
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    fetchWords(setLoading, (wrds) => {
        debugger
        setWordList(wrds)
    });
  }, []);
  return <>{children}</>;
};

export default DataFlowManager;
