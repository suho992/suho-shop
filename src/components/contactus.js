export default function ContactUs(){
    return(
        <div className="my-20 bg-gray-100 p-4">
            <h1 className="text-xl">CONTACT US</h1>
            <div className="grid sm:grid-cols-2">
                <div className="grid grid-col-1 gap-2 py-10 px-4">
                    <h1>EMAIL US</h1>
                    <p>Get in touch by email</p>
                    <p>suho@gmail.com</p>
                </div>
                <div className="grid grid-col-1 gap-2 py-10 px-4">
                    <h1>PHONE</h1>
                    <p>Available Monday to Friday, 09:00 - 18:00 GMT</p>
                    <p>+44 (0) 88 8888 8888</p>
                </div>
            </div>
        </div>
    )
}