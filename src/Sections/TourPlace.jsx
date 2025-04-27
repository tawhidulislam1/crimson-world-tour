
import SectionHeading from '../Components/SectionHeading';
import img3 from "../assets/mcelory.jpg"
import img2 from "../assets/mount.jpg"
import img1 from "../assets/images (2).jpg"
import Card from '../Components/Card';

const TourPlace = () => {
    return (
        <div>
            <SectionHeading heading={'Tour place for you'} subHeading={'top'} paragraph={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum is simply dummy text of the printing and typesetting industry.'}></SectionHeading>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                    {/* Card 1 */}
                    <Card title={'Bardenas Reales'} price={'105$'} image={img1}></Card>

                    {/* Card 2 */}
                    <Card title={'The Swiss Alps'} price={'155$'} image={img2}></Card>


                    {/* Card 3 */}
                    <Card title={'Mountainous'} price={'245$'} image={img3}></Card>
                    {/* Card 4 */}
                    <Card title={'Bardenas Reales'} price={'105$'} image={img1}></Card>

                    {/* Card 5 */}
                    <Card title={'The Swiss Alps'} price={'155$'} image={img2}></Card>


                    {/* Card 6*/}
                    <Card title={'Mountainous'} price={'245$'} image={img3}></Card>

                </div>
            </div>
        </div>
    );
};

export default TourPlace;