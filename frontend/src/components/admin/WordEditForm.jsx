import { Check } from "lucide-react";
import { useState } from "react";
import { editItem } from "../../util/api";

function WordEditForm({ word, setIsEdited }) {
  const [editWord, setEditWord] = useState({
    word: word.word,
    translation: word.translation,
  });

  async function handleEdit(e) {
    e.preventDefault();
    await editItem(editWord, word.id, "words");
    setIsEdited(false);
  }

  return (
    <form onSubmit={(e) => handleEdit(e)} className="flex">
      <input
        className="pl-1"
        type="text"
        value={editWord.word}
        onChange={(e) => setEditWord({ ...editWord, word: e.target.value })}
      />
      -
      <input
        type="text"
        value={editWord.translation}
        onChange={(e) =>
          setEditWord({ ...editWord, translation: e.target.value })
        }
      />
      <button type="submit" className="flex items-center">
        <i>
          <Check color="red" />
        </i>
      </button>
    </form>
  );
}

export default WordEditForm;
