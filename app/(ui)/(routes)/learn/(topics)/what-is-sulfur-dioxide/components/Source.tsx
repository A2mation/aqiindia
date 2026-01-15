import React from 'react'

const Source = () => {
    return (
        <main className="bg-background text-foreground ">
            {/* Header */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">Sources of Sulfur Dioxide Gas</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Volcanic Eruption */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src={"https://static.scientificamerican.com/sciam/cache/file/6160D74D-EDC1-42F0-B5CFB30B435DF4B7_source.jpg?w=1200"}
                                width={300}
                                height={200}
                                alt="Picture of the SO2 icon"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-blue-600">Volcanic Eruption</h2>
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                                Volcanic eruption is one of the many natural causes of sulfur oxides. As molten lava rises to the
                                surface, the pressure on the magma decreases, causing dissolved sulfur and other volatile components to
                                combine to produce various new gases. Volcano eruptions emit sulfites that can travel upwards in the
                                stratosphere and combine with water particles that cause acid rain.
                            </p>
                        </div>
                    </div>

                    {/* Fossil Fuels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
                        <div className="md:col-start-2">
                            <div className="flex justify-center">
                                <img
                                    src={"https://ejfoundation.org/imager/media/117272/Fossil-Fuel_d3867277feb154defec9b24a5714fadb.jpg"}
                                    width={300}
                                    height={200}
                                    alt="Picture of the SO2 icon"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-blue-600">Fossil Fuels</h2>
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                                Fossil fuels and especially the ones with a low filtration process have a high volume of sulfur in it
                                which helps in the formation of many sulfur oxides. The burning of fossil fuels such as oil, coal,
                                diesel, and other elements that contain sulfur emits sulfur dioxide into the atmosphere.
                            </p>
                        </div>
                    </div>

                    {/* Oil Combustion */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src={"https://img.apmcdn.org/8830a2cb5a90a41ebc4e38f28e0081034893f1f4/uncropped/b152be-2020-08-gettyimages-1187789970-600.jpg"}
                                width={300}
                                height={200}
                                alt="Picture of the SO2 icon"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-3 text-blue-600">Oil Combustion</h2>
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                                Among these combustion of fuels in plants and processes including extraction, refining of oil, etc are
                                the major source of sulfur dioxide formation. Internal combustion engines, especially diesel engines are
                                the major sources of sulfur dioxide production in urban areas. Indian governments push for BS-VI engines
                                has made a significant impact on pollution as a whole.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SO2 in the Atmosphere Section */}
            <section className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">SO₂ in the Atmosphere</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <img
                                src={"https://joaairsolutions.com/wp-content/uploads/2023/08/SO2-Sulfur-Dioxide-overview-JOA-Air-Solutions.webp"}
                                width={300}
                                height={200}
                                alt="Picture of the SO2 icon"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/90 mb-6">
                                Sulfur Oxides are present in the atmosphere at low concentrations. Most of it is by human activities
                                including the burning of fuel and coal and that is high concentration of sulfur. In urban areas, a high
                                concentration of sulfur oxides is detected.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                                The life of sulfur dioxide in the atmosphere is less than a week during which it reacts with other
                                atmospheric pollutants and forms various different compounds. When SO₂ reacts with the oxygen present in
                                the environment, it forms sulfur trioxide which dissolves with water vapor and forms sulfuric acid
                                (H₂SO₄), a major acid rain component. It forms secondary pollutants like smog and particulate matter
                                after attaching itself to dust particles in the environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Source
