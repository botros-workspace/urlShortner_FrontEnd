import React, { useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
function URLForm() {
  const [period, setPeriod] = useState('3')
  const [url, setUrl] = useState('')
  const [msg, setMsg] = useState('')
  const send_url = () => {
    if (period < 3) {
      window.alert('Validation period needs to be more than 3 days!')
      return
    }
    const id = nanoid()
    const document = {
      //url_id: id,
      original_url: url,
      validation_period: period,
      valid: true,
    }
    axios
      .post('http://127.0.0.1:8000/urls/', document)
      .then((response) => setMsg(response.data.hashed_url))
      .catch((error) => {
        setMsg(error.message)
      })
    setUrl('')
    setPeriod('')
  }
  return (
    <div>
      <div class='w-full  flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div class='w-full sm:max-w-md p-5 mx-auto'>
          <h2 class='mb-12 text-center text-5xl font-extrabold'>Generate</h2>

          <div class='mb-4'>
            <label class='block mb-1 text-md text-bold' for='url'>
              URL:
            </label>
            <input
              id='url'
              type='text'
              placeholder='Enter URL...'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              name='url'
              class='py-2 px-3 border border-gray-300 focus:border-custom-green focus:outline-none focus:ring focus:ring-custom-green focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
            />
          </div>
          <div class='mb-4'>
            <label class='block mb-1 text-md text-bold' for='period'>
              Valid for:
            </label>
            <input
              id='period'
              type='number'
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              min={3}
              name='period'
              class='py-2 px-3 border border-gray-300 focus:border-custom-green focus:outline-none focus:ring focus:ring-custom-green focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
            />
          </div>

          <div class='mt-6'>
            <button
              onClick={() => send_url()}
              class='w-full inline-flex items-center justify-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-custom-green active:bg-custom-green focus:outline-none focus:border-custom-green focus:ring focus:ring-custom-green disabled:opacity-25 transition'
            >
              Generate
            </button>
            {msg && (
              <div>
                <div class='w-full inline-flex items-center justify-center px-4 py-4  text-gray-800'>
                  <b>Created Hashed Url :</b>
                </div>
                <div class='w-full inline-flex items-center justify-center px-4 py-2  text-gray-800'>
                  <a href={msg}>{msg}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default URLForm
/*

<section className='flex justify-center items-center max-w-2xl ml-96'>
      <div class=' text-gray-800 body-font '>
        <div class=''>
          <div class=''>
            <div class='flex mb-4'>
              <button
                onClick={() => setGenerate(true)}
                className={
                  generate
                    ? ' focus flex-grow text-custom-green border-b-2 border-custom-green py-2 text-lg px-1'
                    : ' focus flex-grow border-b-2  py-2 text-lg px-1'
                }
              >
                Generate
              </button>
              <button
                onClick={() => setGenerate(false)}
                class='flex-grow border-b-2  py-2 text-lg px-1 focus:text-custom-green focus:border-custom-green'
              >
                Search
              </button>
            </div>
            {generate ? (
              <div>
                <div class='flex items-center justify-center bg-gray-100 p-4  rounded-lg pl-80 pr-80 h-12 w-96 '>
                  <input
                    class='bg-gray-100 outline-none pl-24'
                    type='text'
                    placeholder='Enter URL...'
                  />
                </div>

                <button class=' text-white w-full  text-bold  hover:text-gray-600 hover:bg-custom-green border-0 py-2 px-6 focus:outline-none bg-gray-500 rounded mt-4'>
                  Generate shortened URL
                </button>
              </div>
            ) : (
              <div>
                <div class='flex items-center justify-center bg-gray-100 p-4 w-full rounded-lg pl-52 pr-52'>
                  <button className='hover:text-gray-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6 '
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </button>
                  <input
                    class='bg-gray-100 outline-none'
                    type='text'
                    placeholder='Enter Hashed URL...'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
*/
