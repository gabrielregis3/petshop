"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import tutor3 from '../../../public/tutor3.png'
import Image from "next/image";

const testimonials = [
    {
        content:
            "The pet hotel service was an amazing experience! I had to travel and felt at ease knowing Thor was being well cared for. I received daily photos and updates, and he came back home super happy! Without a doubt, the best pet shop in the region.",
        author: "Rafael",
        role: "Owner of Thor (French Bulldog)",
        image: tutor1,
    },
    {
        content:
            "Since I started bringing Luna here for bathing and grooming, she has never been happier! The service is impeccable, the professionals are super caring, and they always leave my furry girl looking beautiful and smelling great. I highly recommend it!",
        author: "Mariana Souza",
        role: "Owner of Luna (Golden Retriever)",
        image: tutor2,
    },
    {
        content:
            "My cats never liked leaving home, but the service at this pet shop made all the difference. The team is very patient and attentive, and the specialized bathing service for cats was wonderful! Now I know exactly where to trust their care.",
        author: "Camila Fernandes",
        role: "Owner of Mel and Max",
        image: tutor3,
    },
]

export function Reviews() {

    // Embla carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center mb-12">Customer Testimonials</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4 select-none">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>

                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="bg-white flex cursor-pointer items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        className="bg-white flex cursor-pointer items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    )
}
