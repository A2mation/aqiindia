"use client"

export function PortfolioShowcase() {
    const portfolioItems = [
        {
            image: "https://www.kimssunshine.co.in/wp-content/uploads/2024/06/The-Impact-of-Air-Quality-on-Health-1-1024x768.jpg",
        },
        {
            image: "https://www.apexhospitals.com/_next/image?url=https%3A%2F%2Fbed.apexhospitals.com%2Fuploads%2Findoor2_a142e16e20.jpg&w=1920&q=75",
        },
        {
            image: "https://www.kailashhealthcare.com/Content/NewWebsite/Images/cardiac_care_Mob.png",
        },
        {
            image: "https://img.jagranjosh.com/images/2024/November/21112024/delhi-air-pollution-causes-health-problems.jpg",
        },
        {
            image: "https://images.apollo247.in/pd-cms/cms/2025-09/AdobeStock_1482342466_0.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
        },
    ]

    return (
        <section className="pt-4 pb-20 overflow-hidden">
            <div className="relative flex">
                {/* First set of images */}
                <div className="flex gap-6 animate-scroll-seamless">
                    {portfolioItems.map((item, index) => (
                        <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
                    {portfolioItems.map((item, index) => (
                        <div key={`set2-${index}`} className="flex-shrink-0 w-[600px]">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
