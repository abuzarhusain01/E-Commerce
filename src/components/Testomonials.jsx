import React from 'react'
import Slider from 'react-slick'

const TestomonialsData = [
    {
        id: 1,
        name: "Victor",
        Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! ",
        img: "https://picsum.photos/seed/picsum/200/300"
    },
    {
        id: 2,
        name: "Satya",
        Text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! ",
         img: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "Virat kohli",
        Text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! ",
        img: "https://picsum.photos/200/300"
    },
    {
        id: 4,
        name: "Siraj",
        Text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! ",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 5,
        name: "Shami",
        Text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed! ",
        img: "https://picsum.photos/103/103"
    },
];

const testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        Infinite: true,
        speed: 500,
        slideToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings:{
                  slideToShow: 3,
                  slideToscroll: 1,
                  Infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slideToShow: 2,
                    slideToscroll: 1,
                    initialSlider: 2,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slideToShow: 1,
                    slideToscroll: 1,
                },
            },
        ],
    };
  return (
    <div className="py-10 mb-10">
        <div className="   w-full  ">
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
                <p data-aos="fade-up" className="text-sm text-blue-300 ">What Our Customer are Saying</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Testomonials</h1>
                <p data-aos="fade-up" className="text-sm text-gray-400 ">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas consequatur eaque non minus commodi nihil adipisci ratione, distinctio quisquam ea animi, laboriosam assumenda et fuga quia nam ipsam placeat Reprehenderit voluptatibus quam labore dolor ducimus, atque libero magni excepturi quo sapiente, a aliquam minus officia, odio ullam maxime voluptates soluta architecto. Harum vero quae sint? Dolores quam iste nam!Fuga debitis nobis officiis modi itaque deleniti adipisci corrupti et consequatur fugiat. Laboriosam ad quos placeat maxime omnis deleniti, iste impedit, blanditiis eligendi voluptate labore! Omnis esse quod corrupti sed!"</p>

            </div>

            <div data-aos="zoom-in" >
                <Slider {...settings}>
                    {TestomonialsData.map((data)=>(
                        <div className="my-6">
                            <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8
                             px-6 mx-4 rounded-xl dark:bg-slate-600 bg-blue-100 relative ">
                                <div className="mb-4">
                                    <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs dark:text-slate-300 text-gray-500 ">
                                            {data.Text}
                                        </p>
                                        <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                                        {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 "></p>
                             </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    </div>
  )
}

export default testimonials
