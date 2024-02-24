import { useAppContext } from "./AppContextProvider";

const Search = () => {
  const { setSearchCriteria } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.elements.search.value;
    if (!data) return;
    setSearchCriteria(data)
  }
  return <section className="form-container">
    <h2>unsplash images</h2>
    <form onSubmit={handleSubmit}>

      <div className="input-container">
        <input type="search" name="search" id="search" className="input" placeholder="dogs" />
        <button type="submit" className="btn">search</button>
      </div>
    </form>
  </section>

}
export default Search;