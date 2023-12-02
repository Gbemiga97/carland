import { createContext, useContext, useState } from "react"


const SearchContext = createContext()
export const useSearchContext = () => useContext(SearchContext)

const SearchContextProvider = ({children}) => {

    const [searchActive, setSearchActive] = useState(false)

    const contextValue = {
        searchActive,
        setSearchActive
    }

  return (
    <SearchContext.Provider
    value={contextValue}
    >
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider