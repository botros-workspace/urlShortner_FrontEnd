import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div class='flex items-center justify-center w-screen h-screen'>
      <div class='px-4 lg:py-12'>
        <div class='lg:gap-4 lg:flex'>
          <div class='flex flex-col items-center justify-center md:py-24 lg:py-32'>
            <h1 class='font-bold text-custom-green text-9xl'>404</h1>
            <p class='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span class='text-red-500'>Oops!</span> URL is not valid anymore
            </p>
            <Link to='/'>
              <button class='px-6 py-2 hover:text-gray-700 text-md font-semibold  hover:bg-custom-green rounded-full bg-gray-500 text-white'>
                Go home
              </button>
            </Link>
          </div>
          <div class='mt-4'>
            <img
              src='https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg'
              alt='img'
              class='object-cover w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
