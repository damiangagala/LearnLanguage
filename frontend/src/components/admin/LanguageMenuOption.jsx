function LanguageMenuOption({
  language,
  image,
  onClickHandler,
  languageQuery,
}) {
  return (
    <li
      className="cursor-pointer p-3 flex gap-3"
      onClick={() => onClickHandler(languageQuery)}
    >
      <img
        src={`/${image}.png`}
        alt={`${image} flag`}
        className="w-8  rounded-full"
      />
      {language}
    </li>
  );
}

export default LanguageMenuOption;
