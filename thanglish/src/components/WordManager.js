import React, {
  useState,
  useContext,
  useEffect,
  createRef,
  useRef,
} from "react";
import { StorageContext } from "./firebase";
import { LoadingContext } from "../context/LoadingProvider";
import { fetchCrtSpelling, addToCrtSpelling } from "../collection/crtSpelling";

const WordManager = () => {
  const [word, setWord] = useState("");
  const { crtSpellings, setCrtSpellings } = useContext(StorageContext);
  const { setLoading } = useContext(LoadingContext);
  const addBtnRef = createRef(null);
  const tableContainerRef = useRef(null);
  const getRows = () => {
    if (!(crtSpellings?.length > 0)) return [];
    return crtSpellings.map((spl, index) => (
      <React.Fragment key={index}>
        <td>
          <span className="fb-id">{spl.id}</span>
        </td>
        <td>{spl.wrd}</td>
      </React.Fragment>
    ));
  };
  const fetchWords = async () => {
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
    setCrtSpellings(spellings);
  };
  const addWord2DB = async () => {
    setLoading(true);
    await addToCrtSpelling(word)
      .then(function (docRef) {
        setLoading(false);
        let clonedCrtSpelling = [...crtSpellings];
        clonedCrtSpelling.unshift({ id: docRef.id, wrd: word });
        setCrtSpellings(clonedCrtSpelling);
        setWord("");
        tableContainerRef.current.scrollTo(0, 0);
      })
      .catch(function (error) {
        setLoading(false);
        console.error("Error adding document: ", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addBtnRef.current.click();
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      <div className="d-f">
        <input
          className="w-100"
          type="text"
          value={word}
          onChange={(eve) => setWord(eve.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button ref={addBtnRef} onClick={addWord2DB}>
          ADD
        </button>
      </div>
      <div ref={tableContainerRef} class="table-container">
        <table>
          <TableHeaders cols={["ID", "WORDS"]} />
          <TableRows rows={getRows()} rowCount={2} />
        </table>
      </div>
    </div>
  );
};

export default WordManager;

const TableHeaders = ({ cols }) => {
  return (
    <tr>
      {cols.map((col, index) => (
        <th key={index}>{col}</th>
      ))}
    </tr>
  );
};
const TableRows = ({ rows, rowCount }) => {
  if (!(rows.length > 0))
    return (
      <tr>
        <td colSpan={rowCount}>Empty</td>
      </tr>
    );
  return rows.map((row, index) => <tr key={index}>{row}</tr>);
};
