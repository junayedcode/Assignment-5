const RemoveFromStack = ({ technology, removeFromStack }) => {
  return (
    <button
      onClick={() => removeFromStack(technology.name)}
      className="ml-auto flex h-5 w-5 items-center justify-center rounded-full text-sm text-red-500 hover:bg-red-50"
    >
      ×
    </button>
  );
};

export default RemoveFromStack;