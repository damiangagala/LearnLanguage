import { createContext, useState } from "react";

export const AdminContext = createContext();

function AdminProvider({ children }) {
  const [words, setWords] = useState([]);
  const [grammar, setGrammar] = useState([]);
  const [search, setSearch] = useState("");

  const values = {
    setWords,
    setGrammar,
    setSearch,
    words,
    search,
    grammar,
  };

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminProvider;
