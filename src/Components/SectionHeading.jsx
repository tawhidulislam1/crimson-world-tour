
function SectionHeading({ heading, subHeading, paragraph }) {
    return (
        <div className="mt-10 text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold"><span className="text-[#FFCD05]">{subHeading}</span> {heading} </h2>
            <p className="text-[14px] text-[#323232] py-1 px-3">{paragraph}</p>
        </div>
    );
}

export default SectionHeading;