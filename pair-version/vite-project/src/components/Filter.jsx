function Filter({ filter, setFilter }) {
  return (
    <div className="filter-group">
      <button 
        className={`filter-btn all ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button 
        className={`filter-btn active-filter ${filter === "active" ? "active" : ""}`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button 
        className={`filter-btn completed ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default Filter;