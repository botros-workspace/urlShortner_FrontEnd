import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListComponent from './ListComponent'
import moment from 'moment'
function URLList() {
  const [list, setList] = useState(null)
  const [update, setUpdate] = useState(true)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/urls/`).then((res) => {
      const list = res.data
      setList(list)
    })
  }, [update])
  return (
    <div class='flex items-center justify-center mt-16 mb-32'>
      <div class='col-span-12'>
        <div class='overflow-auto lg:overflow-visible '>
          <table class='table text-gray-400 border-separate space-y-6 text-sm'>
            <thead class=' text-gray-800'>
              <tr className='bg-gray-400'>
                <th class='p-3 text-left'>Url</th>
                <th class='p-3'>Hashed URL</th>
                <th class='p-3'>Creation Date</th>
                <th class='p-3'>Valid For</th>
                <th class='p-3'>Validity</th>

                <th class='p-3 text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item, index) => {
                return (
                  <ListComponent
                    key={item.url_id}
                    item={item}
                    index={index}
                    delete={() => setUpdate(!update)}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default URLList
