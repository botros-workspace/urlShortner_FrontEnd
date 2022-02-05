import React from 'react'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'

function ListComponent({ item, index, delete: update }) {
  const delete_item = (url_id) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      axios.delete(`http://127.0.0.1:8000/urls/${url_id}/`)
    }
    update()
  }
  return (
    <tr
      key={item.url_id}
      className={index % 2 !== 0 ? 'bg-gray-200' : 'bg-white'}
    >
      <td className='px-4 py-6 '>
        <div class='text-gray-800 truncate w-44'>{item.original_url}</div>
      </td>
      <td className='px-4 py-6'>
        <a href={item.hashed_url}>
          <div class='text-gray-800 truncate w-44'>{item.hashed_url}</div>
        </a>
      </td>
      <td className='px-4 py-6'>
        <div class='text-gray-800 '>{item.creation_date}</div>
      </td>
      <td className='px-4 py-6'>
        <div class='text-gray-800'>{item.validation_period} days</div>
      </td>
      <td className='px-4 py-6 '>
        <span
          className={
            item.valid
              ? 'bg-green-400 text-gray-900 rounded-md px-4 py-2 pl-7 pr-8'
              : 'bg-red-400 text-white rounded-md px-4 py-2 '
          }
        >
          {item.valid ? 'Valid' : 'Not Valid'}
        </span>
      </td>
      <td className='px-4 py-6'>
        <button
          onClick={() => {
            delete_item(item.url_id)
          }}
          class=' text-gray-900 hover:text-gray-500  text-xl m-2'
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  )
}

export default ListComponent
