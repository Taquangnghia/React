import React from 'react'

type Props = {}

const Vidu = (props: Props) => {
  return (
    <div>
  <nav className="bg-white shadow-lg" id="nva">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <a className="flex items-center py-4 px-2" href="/">
            <img className="h-8 w-8 mr-2" src="https://res.cloudinary.com/dqyoluczh/image/upload/v1644757139/pcynoy4txejwsnppllke.png" alt />
            <span className="font-semibold text-gray-500 text-lg">Căn Hộ Tiện Ich</span>
          </a>
        </div>
        <div className="mt-4 ml-10 pl-15">
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
        </div>
        <div className="hidden items-center md:flex space-x-1">
          <a className="py-4 px-2  border-purple-500 border-b-4 text-purple-500 font-semibold" href="/">Home</a>
          <a href="/chungcu/${post.id}" className="py-4 px-2  border-purple-500 font-semibold hover:text-purple-500 transition duration-300"></a>
          <a href="/chitiet/giohang" className="py-4 px-2  border-purple-500 font-semibold hover:text-purple-500 transition duration-300">Giỏ hàng</a>
        </div>
      </div>
    </div>
  </nav>
  <main className="mt-10 px-4">
    <div className="sm:text-center lg:text-center">
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl">
        <span className="block">Khính chào</span>
        <span className="block text-purple-500">Quý Khách hàng</span>
      </h1>
      <h1 id="username" className="text-red" /><a  id="logout">Đăng xuất</a>
      <div>
        <p className="mt-3 text-gray-500 md:text-xl md:mt-5">Công ty căn hộ cao cấp chuyên tư vấn buôn bán những lô đát tuyệt vời đến cho quý khách hàng
          để nhận được nhiều ưu đãi từ công ty  hoặc muốn tư vấn quý khách có thể đăng ký tại đây
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center"> 
          <div className="m-2">
            <a className="flex justify-center rounded-md bg-purple-500 text-white px-8 py-3" href="/dangnhap">Đăng nhập</a>
          </div>
          <div className="m-2">
            <a className="flex justify-center rounded-md bg-purple-100 text-purple-700 px-8 py-3" href="/dangky">Đăng ký</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div className="mt-5 flex justify-center">
    <h2 className="text-3xl text-gray-500 mb-2">Mặt hàng </h2>
  </div>
</div>


  )
}

export default Vidu