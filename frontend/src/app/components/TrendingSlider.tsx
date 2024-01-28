/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

const TrendingSlider = () => {

  interface Item {
    id: number;
    img: string;
    imgAlt: string;
    description: string;
    price: number;
  }
  
  const filteredItems: Item[] = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgAlt: 'none',
      description: "camera",
      price: 200
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgAlt: 'none',
      description: "Phone",
      price: 100
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgAlt: 'none',
      description: "Laptop",
      price: 500
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgAlt: 'none',
      description: "Headephone",
      price: 40
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgAlt: 'none',
      description: "Keyboard",
      price: 140
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-4">
      {filteredItems.map((item) => (
        <div key={item.id} className="flex flex-col items-center bg-gray-50 rounded-xl p-2">
          <img className='rounded-xl w-80 h-60 object-cover'
            src={item.img}
            alt={item.imgAlt}
          />
          <p className='font-semibold text-xl text-slate-600'>{item.description}</p>
          <p><span className='font-bold'>R$</span>{" "}{item.price},00</p>
        </div>
      ))}
    </div>
    
  )
}

export default TrendingSlider