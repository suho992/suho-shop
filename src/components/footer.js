export default function Footer(){
    return(
        <div className="mt-20 bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <div className="grid sm:grid-cols-3">
                    <div className="col-span-2">
                        <h1 className="text-white my-2 font-semibold">FOLLOW US</h1>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-6 py-10 px-4">
                        <div>
                        <ul  className="divide-y divide-gray-500">
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Contact Us</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Orders & delivery</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Payment & pricing</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Cryptocurrency payments</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Return & refunds</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">FAQs</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Terms & conditions</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Privacy policy</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Accessibility</p>
                                </li>
                        </ul>
                        </div>
                        <div>
                        <ul className="divide-y divide-gray-500">
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">About Us</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Investors</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Affiliate programme</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Careers</p>
                                </li>
                                <li>
                                    <p className="text-sm font-light leading-8 text-white">Sitemap</p>
                                </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-white font-light text-sm">'SUHO' and the 'SUHO' logo are trade marks of SUHO Limited and are registered in numerous jurisdictions around the world.</p>
                    <p className="text-white font-light text-sm">Copyright 2023 SUHO Limited. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}