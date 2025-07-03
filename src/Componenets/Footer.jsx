import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="border-t border-gray-800 py-8 px-6 bg-[#0f172a] text-gray-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-green-400">Sohaib</div>
            <span className="text-gray-400">Web designer and front-end developer</span>
          </div>
          <div className="text-gray-400">
            Media
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer