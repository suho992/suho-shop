import Navbar from '../components/navbar'
import {useNavigate} from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Basic Tee Tay Son',
    url: 'basic-tee-tay-son',
    imageSrc: '1.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'White',
  },
  {
    id: 2,
    name: 'Basic Tee Savage',
    url: 'basic-tee-tay-son',
    imageSrc: '2.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    url: 'basic-tee-tay-son',
    imageSrc: '3.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 3,
    name: 'Basic Tee Fucking Awesome',
    url: 'basic-tee-tay-son',
    imageSrc: '4.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 1,
    name: 'Basic Tee',
    url: 'basic-tee-tay-son',
    imageSrc: '1.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 2,
    name: 'Basic Tee',
    url: 'basic-tee-tay-son',
    imageSrc: '2.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    url: 'basic-tee-tay-son',
    imageSrc: '3.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    url: 'basic-tee-tay-son',
    imageSrc: '4.jpg',
    imageAlt: "Front of men's Basic Tee in White.",
    price: '$35',
    color: 'White',
  },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative" onClick={()=>navigate(`/product/${product.url}`)}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.url}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
