import { Pencil } from "lucide-react";
import { CircleX } from "lucide-react";
import { deleteItem } from "../../util/api";
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminProvider";

function Word({ word, index, setIsEdited }) {
  const { words, setWords } = useContext(AdminContext);

  async function handleDelete() {
    const res = await deleteItem("words", word.id);
    if (res.status === 200) {
      const newWordsList = [...words];
      newWordsList.splice(index, 1);
      setWords(newWordsList);
    }
  }

  return (
    <div className="flex">
      <button onClick={() => setIsEdited(true)}>
        <i>
          <Pencil size={16} />
        </i>
      </button>
      <button className="mx-2" onClick={handleDelete}>
        <i>
          <CircleX size={16} color="red" />
        </i>
      </button>
      <p className=" text-lg flex">
        {word.word} - {word.translation}
      </p>
    </div>
  );
}

export default Word;
