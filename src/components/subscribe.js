export default function Subscribe(){
    return(
        <div className="my-20">
            <div className="grid sm:grid-cols-2">
                <div className="py-10 px-4">
                    <h1 className="text-3xl my-2 font-semibold">GET 10% OFF YOUR FIRST ORDER</h1>
                    <p>Sign up for promotions, tailored new arrivals, stock updates and more - straight to your inbox</p>
                </div>
                <div className="grid grid-col-1 gap-2 py-10 px-4">
                    <h1>GET UPDATES</h1>
                    <input className="w-1/2 rounded-md" type="text" name="subs" placeholder="Email"></input>
                    <div>
                        <button type="button" className="items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Sign Up</button>
                    </div>
                    <p>By signing up, you consent receiving marketing by email and acknowledge you have read our Privacy Policy. Unsubscribe anytime at the bottom of our emails.</p>
                </div>
            </div>
        </div>
    )
}