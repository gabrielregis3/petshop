"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';

const services = [
    {
        title: "Bath & Grooming",
        description: "Includes a bath with products specific to the animal’s coat and skin type, nail trimming, ear cleaning, and personalized grooming (hygienic or styled).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Hi, I saw the Bath & Grooming service on the website and would like more information."
    },
    {
        title: "Veterinary Consultation",
        description: "Provides basic or specialized clinical care to look after your pet’s health. Includes disease diagnosis and the administration of mandatory vaccines.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: "Hi, I saw the Veterinary Consultation service on the website and would like more information."
    },
    {
        title: "Pet Taxi",
        description: "Transportation service to take and pick up pets from the pet shop, veterinary clinics, or other locations. Ideal for pet owners who don’t have the time or suitable transportation for their animals.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Hi, I saw the Pet Taxi service on the website and would like more information."
    },
    {
        title: "Pet Hotel",
        description: "Boarding service for pets, ideal when owners need to travel or be away for a few days. Pets are accommodated in safe, comfortable spaces.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: "Hi, I saw the Pet Hotel service on the website and would like more information."
    },
]

export function Services() {

    // Embla carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 3 },
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3 select-none">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between select-none">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a href="#" className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">
                                                <WhatsappLogoIcon className="w-5 h-5" />
                                                Contact Us
                                            </a>
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
