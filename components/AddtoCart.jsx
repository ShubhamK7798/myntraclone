import Link from 'next/link'
import React from 'react'

const AddtoCart = ({onClick}) => {
  return (
    <div onClick={onClick}>
        
        <div
  className="inline-flex overflow-hidden text-white bg-gray-900 cursor-pointer rounded group"
>
  <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  </span>
  <span className="pl-4 pr-5 py-2.5">Add to Cart</span>
</div>

    </div>
  )
}

export default AddtoCart