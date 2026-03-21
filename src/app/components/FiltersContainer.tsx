export default function FiltersContainer() {
  return (
    <section className="bg-surface-container p-6 rounded-lg border-l-2 border-outline-variant/20 relative overflow-hidden">
      <div className="texture-overlay absolute inset-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-end">
        <div className="flex-1 w-full group">
          <label className="block text-[10px] uppercase tracking-widest text-outline mb-2 font-bold">
            Buscar personaje
          </label>

          <div className="relative">
            <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
              search
            </span>

            <input
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 pl-8 pb-2 text-on-surface font-body transition-all"
              placeholder="Enter name or ID..."
              type="text"
            />
          </div>
        </div>

        <div className="w-full md:w-64">
          <label className="block text-[10px] uppercase tracking-widest text-outline mb-2 font-bold">
            Genero
          </label>

          <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 pb-2 text-on-surface font-body appearance-none">
            <option>All Units</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
          </select>
        </div>

        <div className="w-full md:w-64">
          <label className="block text-[10px] uppercase tracking-widest text-outline mb-2 font-bold">
            Estado Vital
          </label>

          <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 pb-2 text-on-surface font-body appearance-none">
            <option>All Statuses</option>
            <option>Active</option>
            <option>MIA</option>
            <option>Deceased</option>
          </select>
        </div>
      </div>
    </section>
  );
}
