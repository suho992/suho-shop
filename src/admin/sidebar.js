import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Sidebar(){
    return(
      <div className="hidden md:flex">
            <div className="flex-none w-64 bg-slate-200 h-screen p-2 fixed">
                <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                <div className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <a href="/admin/dashboard"><span>Dashboard</span></a>
                </div>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-md font-medium text-gray-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                            <span>Products</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-slate-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-8 pt-2 pb-2 text-sm text-gray-500">
                            <div className="group relative flex gap-x-6 rounded-lg px-4 py-2 hover:bg-slate-100">
                                    <a href="/admin/products" className="font-semibold text-md text-gray-900">
                                    Product list
                                    <span className="absolute inset-0" />
                                    </a>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg px-4 py-2 hover:bg-slate-100">
                                    <a href="/admin/products/add-product" className="font-semibold text-md text-gray-900">
                                     Add Product
                                    <span className="absolute inset-0" />
                                    </a>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}