import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import URLForm from '../components/URLForm'
function CreateURL() {
  return (
    <div>
      <Link to='/'>
        <button class='bg-custom-green hover:bg-gray-500 text-white font-bold py-3 px-3 rounded-full m-8 text-xl'>
          <AiOutlineArrowLeft />
        </button>
      </Link>
      <URLForm />
    </div>
  )
}

export default CreateURL
