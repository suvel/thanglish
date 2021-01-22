import React, { useState, useContext, useEffect } from "react";
import { StorageContext } from "./firebase";
import { LoadingContext } from "../context/LoadingProvider";
import { fetchCrtSpelling, addToCrtSpelling } from "../collection/crtSpelling";

const WordManager = () => {
  const [word, setWord] = useState("");
  const { crtSpellings, setCrtSpellings } = useContext(StorageContext);
  const { setLoading } = useContext(LoadingContext);

  const getRows = () => {
    if (!(crtSpellings?.length > 0)) return [];
    return crtSpellings.map((spl, index) => (
      <React.Fragment key={index}>
        <td>{spl.id}</td>
        <td>{spl.wrd}</td>
      </React.Fragment>
    ));
  };
  const fetchWords = async () => {
    let spellings = [];
    setLoading(true);
    await fetchCrtSpelling()
      .then((querySnapshot) => {
        debugger;
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
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
        console.log("Document written with ID: ", docRef.id);
        let clonedCrtSpelling = [...crtSpellings];
        clonedCrtSpelling.push({ id: docRef.id, wrd: word });
        setCrtSpellings(clonedCrtSpelling);
      })
      .catch(function (error) {
        setLoading(false);
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    fetchWords();
  }, []);

  useEffect(() => {
    console.log({ crtSpellings });
  }, [crtSpellings]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={word}
          onChange={(eve) => setWord(eve.target.value)}
        />
        <button onClick={addWord2DB}>ADD</button>
      </div>
      <div>
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
