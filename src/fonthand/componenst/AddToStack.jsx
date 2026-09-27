const AddToStack = ({ technology, addToStack }) => {
  return (
    <button
      onClick={() => addToStack(technology)}
      className="mt-3 w-full rounded bg-slate-950 py-2 text-[8px] font-medium text-white"
    >
      Add to Stack
    </button>
  );
};

export default AddToStack;