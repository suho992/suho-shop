import {useNavigate} from 'react-router-dom'

export default function ProductList({products}) {
  const navigate = useNavigate()
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
    {products.map((product) => (
        <div key={product.id} className="group relative" onClick={()=>navigate(`/product/${product.url}`)}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
            src={product.img[0]}
            alt={product.slug}
            className="h-full w-full object-cover lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-gray-700">
                <a href={"/sneakers/"+product.slug}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
                </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.variant[0].price}</p>
        </div>
        </div>
    ))}
    </div>
  )
}
