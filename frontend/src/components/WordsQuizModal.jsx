import { forwardRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const WordsQuizModal = forwardRef(function WordsQuizModal(props, ref) {
  const { data } = useLoaderData();
  const [item, setItem] = useState(generateRandomNumber);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * (data.length - 0 + 1));
  }

  function resetFormState() {
    setInput("");
    setIsDisabled(false);
    setIsCorrect("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input === data[item].translation) {
      setIsCorrect("green");
      setIsDisabled(true);

      setTimeout(() => {
        setItem(generateRandomNumber);
        resetFormState();
      }, 2000);
    } else {
      setIsCorrect("red");
      setIsDisabled(true);

      setTimeout(() => resetFormState(), 2000);
    }
  }

  return (
    <dialog ref={ref} className="p-4" style={{ backgroundColor: isCorrect }}>
      <form onSubmit={handleSubmit}>
        <span>{data[item]?.word}</span>
        <input
          className="border border-black mx-4"
          autoFocus
          disabled={isDisabled}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Sprawdź</button>
      </form>
    </dialog>
  );
});

export default WordsQuizModal;
