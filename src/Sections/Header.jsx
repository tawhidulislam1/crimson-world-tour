import Navbar from "../Components/Navbar";
import cover from "../assets/cover.jpg";



const Header = () => {
    return (
        <div
            className="bg-cover bg-center"
            style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="hero min-h-screen place-items-baseline items-center ">
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;