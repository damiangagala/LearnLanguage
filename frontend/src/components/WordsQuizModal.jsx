import { CircleX } from "lucide-react";
import { forwardRef, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const WordsQuizModal = forwardRef(function WordsQuizModal(props, ref) {
  const { data } = useLoaderData();
  const [item, setItem] = useState(generateRandomNumber);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const focusInput = useRef(null);

  function generateRandomNumber() {
    return Math.floor(Math.random() * data.length);
  }

  function resetFormState() {
    setInput("");
    setIsDisabled(false);
    setIsCorrect("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input === data[item].translation) {
      setIsCorrect("#65a30d");
      setIsDisabled(true);

      setTimeout(() => {
        setItem(generateRandomNumber);
        resetFormState();
        setTimeout(() => focusInput.current.focus(), 100);
      }, 1000);
    } else {
      setIsCorrect("#dc2626");
      setIsDisabled(true);

      setTimeout(() => {
        resetFormState();
        setTimeout(() => focusInput.current.focus(), 100);
      }, 1000);
    }
  }

  return (
    <dialog
      ref={ref}
      className=" backdrop:bg-black/50 h-3/4 lg:h-1/3 lg:w-1/3 relative rounded-2xl"
    >
      <CircleX
        onClick={() => ref.current.close()}
        className="absolute right-2 top-2 cursor-pointer z-10"
      />
      <form
        onSubmit={handleSubmit}
        spellCheck="false"
        autoComplete="off"
        className="flex flex-col justify-evenly h-full relative"
      >
        <div className="flex flex-col lg:flex-row text-4xl h-full ">
          <span className="basis-1/2 bg-blush-pink p-1 flex items-center">
            <p className="mx-auto">{data[item]?.word}</p>
          </span>
          <input
            ref={focusInput}
            className="focus:outline-none basis-1/2 w-full bg-transparent font-normal p-1 text-center bg-pale-peach"
            autoFocus
            disabled={isDisabled}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ backgroundColor: isCorrect }}
          />
        </div>
        <button
          type="submit"
          className="bg-soft-white border border-black mx-auto px-4 py-1 rounded-2xl text-lg absolute bottom-2 left-1/2 translate-x-[-50%]"
        >
          Sprawdź
        </button>
      </form>
    </dialog>
  );
});

export default WordsQuizModal;
