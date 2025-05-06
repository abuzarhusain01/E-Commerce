import React from 'react'
import Image1 from "../assets/shirt.png";
import Image2 from "../assets/shirt2.png";
import Image3 from "../assets/shirt3.png";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        Img: Image1,
        title: "Casual Wear",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! "

    },
    {
        id: 2,
        Img: Image2,
        title: "Printed Shirts",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! "

    },
    {
        id: 3,
        Img: Image3,
        title: "Women Shirts",
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! "

    },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="w-full">
        <div className="text-left mg-24">
            <p data-aos="fade-up" className="text-sm flex justify-center text-blue-300">
                Top Rated Products
            </p>
            <h1 data-aos="fade-up" className="text-3xl flex justify-center font-bold">Best Products</h1>
            <p data-aos="fade-up" className="text-xs flex justify-center text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat veniam fugiat,
            </p>
            <div className='m-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data)=>(
                        <div data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 
                        hover:bg-black/80 dark:hover:bg-blue-300 hover:text-white relative shadow-xl 
                        duration-300 group max-w-[300px] ">
                            <div>
                                <img src={data.Img} alt="" className="max-w-[140px] block mx-auto transfrom translate-y-1 
                                group-hover:scale-105 duration-300 drop-shadow-md "/>
                            </div>
                            <div className="w-full flex items-center justify-center gap-1  ">
                                <FaStar className="text-yellow-500  "/>
                                <FaStar className="text-yellow-500  "/>
                                <FaStar className="text-yellow-500  "/>
                                <FaStar className="text-yellow-500  "/>
                            </div>
                            <h1 className="text-xl font-bold m-2">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm ml-2 line-clamp-2">
                                {data.description}
                            </p>
                            <button className="bg-blue-300 hover:scale-105 duartion-300 text-white
                            py-1 px-4 rounded-full m-4 group-hover:bg-white group-hover:text-blue-300 " 
                            onClick={handleOrderPopup}
                            >Order Now </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TopProducts
