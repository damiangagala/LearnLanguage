function AdminGrammarListItem({ time }) {
  console.log(time);
  return (
    <div>
      <h1 className="text-4xl text-soft-white font-bold">{time.name}</h1>
      <p className="px-2">{time.description}</p>
    </div>
  );
}

export default AdminGrammarListItem;
