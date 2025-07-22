import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'

const sortOptions = [
  { value: 'popularity', label: 'Sort by popularity' },
  { value: 'rating', label: 'Sort by rating' },
  { value: 'natural', label: 'Natural' },
  { value: 'special', label: 'Special' },
]

const Orchids = () => {
  const navigate = useNavigate()
  const { sortParam } = useParams()
  const [data, setData] = useState([])
  const [sort, setSort] = useState(sortParam || 'popularity')

  useEffect(() => {
    setSort(sortParam || 'popularity') // update when URL param changes
  }, [sortParam])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL)
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleSortChange = (value) => {
    navigate(`/OrchidsSort/${value}`) // update URL
  }

  const sortedData = React.useMemo(() => {
    let arr = [...data]
    switch (sort) {
      case 'popularity':
        arr.sort((a, b) => (b.likes || 0) - (a.likes || 0))
        break
      case 'rating':
        arr.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'natural':
        arr = arr.filter(item => item.isNatural)
        break
      case 'special':
        arr = arr.filter(item => item.isSpecial)
        break
      default:
        break
    }
    return arr
  }, [data, sort])

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F5F1EB",
        padding: "16px 40px"
      }}>
        <select
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
          style={{
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid #c44fb6",
            color: "#c44fb6",
            fontWeight: 500
          }}
        >
          {sortOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className='row py-4 flex justify-center items-center' style={{ backgroundColor: "#F5F1EB" }}>
        {sortedData.map((item) => <Card orchids={item} key={item.id || item.Id} />)}
      </div>
    </div>
  )
}

export default Orchids