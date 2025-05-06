import React from 'react'
import Image1 from "../assets/women-1.png";
import Image2 from "../assets/women2.jpg";
import Image3 from "../assets/women3.jpg";
import Image4 from "../assets/women4.jpg";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
    id: 1,
    Img: Image1,
    title: "Women Ethnic",
    rating: "5.0",
    color: "white",
    aosDelay: "0",

    },
    {
        id: 2,
        Img: Image2,
        title: "Women western",
        rating: "4.0",
        color: "red",
        aosDelay: "200",
    
        },{
            id: 3,
            Img: Image3,
            title: "Goggles",
            rating: "4.5",
            color: "brown",
            aosDelay: "400",
        
            },{
                id: 4,
                Img: Image4,
                title: "Women Ethnic",
                rating: "4.7",
                color: "yellow",
                aosDelay: "600",
            
                },
                {
                    id: 5,
                    Img: Image2,
                    title: "Women Ethnic",
                    rating: "4.2",
                    color: "black",
                    aosDelay: "800",
                
                    },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12"> 
    <div className="w-full">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-shadow-blue-300 ">Top Selling Products For You</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
                "Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Iusto nesciunt aliquam fuga"</p>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
            lg:grid-cols-5 place-items-center gap-5">
                {ProductsData.map((data)=>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} 
                    className="space-y-3">
                        <img src={data.Img} alt="Cover image" className="h-[220px] w-[150px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold">{data.title}</h3>
                            <p className="text-sm text-gray-600 ">
                                {data.color}
                            </p>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-400  "/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-blue-300 text-white py-1 px-5 rounded-md "> View All button</button>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Products
