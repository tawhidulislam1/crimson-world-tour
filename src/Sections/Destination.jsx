import Card from "../Components/Card";
import SectionHeading from "../Components/SectionHeading";
import img1 from "../assets/tajmahar.jpg"
import img2 from "../assets/images.jpg"
import img3 from "../assets/images (1).jpg"

const Destination = () => {
    return (
        <div>
            <SectionHeading heading={"Destinations"} subHeading={"Best"} paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum is simply dummy text of the printing and typesetting industry."}></SectionHeading>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                    {/* Card 1 */}
                    <Card title={'Taj Mahal'} price={'105$'} image={img1}></Card>

                    {/* Card 2 */}
                    <Card title={'Shitakundo'} price={'155$'} image={img2}></Card>


                    {/* Card 3 */}
                    <Card title={'Oldest mosque'} price={'245$'} image={img3}></Card>

                </div>
            </div>

        </div>
    );
};

export default Destination;