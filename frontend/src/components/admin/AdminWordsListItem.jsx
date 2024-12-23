import { useState } from "react";
import Word from "./Word";
import WordEditForm from "./WordEditForm";

function AdminWordsListItem({ word, index }) {
  const [isEdited, setIsEdited] = useState(false);

  return !isEdited ? (
    <Word word={word} index={index} setIsEdited={setIsEdited} />
  ) : (
    <WordEditForm word={word} setIsEdited={setIsEdited} />
  );
}

export default AdminWordsListItem;
