import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function SearchForm() {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    //e.preventDefault()

    console.log(search);
  }

  useEffect(() => {
    onSubmit()
  }, [search])

  return (
    <section className='form'>
      <form onChange={onSubmit}>
        <div className='form-group'>
          <label htmlFor='search'>Pesquisar Cliente</label>
          <input
            type='search'
            name='search'
            id='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm