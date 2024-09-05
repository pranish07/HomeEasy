
const Search = () => {
  return (
   <form action="/search" className="flex-1 flex-row justify-content ">
    <div>
        <label htmlFor="location">
            <input type="text" id="location" placeholder="where are we going" className=""/>
        </label>
    </div>
    <div>
        <label htmlFor="checkin">
            <input type="text" id="checkin" placeholder="Check in"/>
        </label>
    </div>
    <div>
        <label htmlFor="checkout">
            <input type="text" id="location" placeholder="check out"/>
        </label>
    </div>
    <div>
        <label htmlFor="guest">
            <input type="text" id="location" placeholder="Add guest"/>
        </label>
    </div>
    <div>
        <input type="button" />
    </div>
   </form>

  )
}

export default Search