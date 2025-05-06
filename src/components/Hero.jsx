import React from 'react'
import Image1 from "../assets/women.png";
import Image2 from "../assets/shopping.png";
import Image3 from "../assets/sale.png";

import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        Img: Image1,
        title: "Upto 50% off on all Men's Wear ",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore neque recusandae. Quo cumque dolores a ipsam laborum deserunt optio! Suscipit accusamus reiciendis minus esse dicta ex eveniet, sunt magni!`
    },
    {
        id: 2,
        Img: Image2,
        title: "30% off on all Women's Wear ",
        description:  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quibusdam aspernatur odio accusantium doloribus aut, est ipsum consequuntur totam? Ratione saepe ad unde vitae, voluptatum expedita laborum provident ipsam harum
        Officiis in, quibusdam distinctio soluta sequi aliquam, deleniti illum, tempora illo facere consequuntur suscipit. Error harum voluptate recusandae, eum a iure minus sit minima obcaecati reprehenderit consequuntur ab, non temporibus?
        Adipisci sapiente omnis nesciunt eius cum quod tempora natus maiores iusto culpa amet unde, officiis quisquam illo dolor esse. Ea cum quo maiores tenetur, modi a aliquid iure est autem.`,
        
    },
    {
        id: 3,
        Img: Image3,
        title: "70% off on all Products Sale",
        description:  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quibusdam aspernatur odio accusantium doloribus aut, est ipsum consequuntur totam? Ratione saepe ad unde vitae, voluptatum expedita laborum provident ipsam harum.
        Officiis in, quibusdam distinctio soluta sequi aliquam, deleniti illum, tempora illo facere consequuntur suscipit. Error harum voluptate recusandae, eum a iure minus sit minima obcaecati reprehenderit consequuntur ab, non temporibus?
        Adipisci sapiente omnis nesciunt eius cum quod tempora natus maiores iusto culpa amet unde, officiis quisquam illo dolor esse. Ea cum quo maiores tenetur, modi a aliquid iure est autem.`,
        
    }

];

const Hero = ({handleOrderpopup }) => {

    var settings = {
        dots:false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,

    }
    return <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300 " >  
    <div className="h-[700px] w-[700px] bg-blue-300 absolute top-1/6 rounded-3xl rotate-45 -z[8]" > </div>
    <div className="container pb-8 sm:pb-0  " > 

        <Slider {...settings}>
            {ImageList.map((data)=>(

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2" >
                        <div  className="flex flex-col justify-center gap-4  pt-12 sm:pt-0 text-center
                        sm:text-left order-2 sm:order-1 relative z-10  ">
                            <h1 data-aos="zoom-out" data-aos-duration="500"
                            data-aos-ones="true" 
                            className="text-5xl sm:6xl lg:text-7xl font-bold"
                            >
                                {data.title}
                            </h1>
                            <p data-aos="fade-up" data-aos-duration="500"
                            data-aos-delay="100" 
                            className="text-sm"
                            >
                                {data.description}
                            </p>
                            <div 
                            data-aos="fade-up" data-aos-duration="500"
                            data-aos-delay="300" 
                            >
                                <button onClick={()=>{
                                    handleOrderpopup;
                                }}
                                className="bg-gradient-to-r bg-blue-300 bg-green-300 hover:scale-105
                                duration-200 text-white py-2 px-4 rounded-full"
                                > Order Now </button>
                            </div>
                        </div>

                        <div className="order:1 sm:order-2 "> 
                            <div data-aos="zoom-in" data-aos-ones="true"
                           className="relative z-10 ">
                            <img src={data.Img} alt="slider Images" className="w-[300px] h-[300px] sm:h-[450px]
                            sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                           </div>
                        </div>
                    </div>
                </div>
             ))}
        </Slider>

    </div>
    </div>
  
};

export default Hero
