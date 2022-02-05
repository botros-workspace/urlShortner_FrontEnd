import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import URLList from '../components/URLList'
function ManageURL() {
  return (
    <div>
      <Link to='/'>
        <button class='bg-custom-green hover:bg-gray-500 text-white font-bold py-3 px-3 rounded-full m-8 text-xl'>
          <AiOutlineArrowLeft />
        </button>
      </Link>
      <URLList />
    </div>
  )
}

export default ManageURL
