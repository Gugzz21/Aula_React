function AddTask() {
  return (
    <div className=" my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className=" bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
