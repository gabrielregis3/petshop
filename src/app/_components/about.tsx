import Image from "next/image";
import aboutImg from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap 12 items-center">

                    <div className="relative" data-aos="fade-up-right">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={aboutImg}
                                alt="Photo of a dog"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
                            <Image
                                src={about2Img}
                                alt="Photo of a dog 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10 ml-8" data-aos="fade-up-left">
                        <h2 className="text-4xl font-bold">ABOUT</h2>

                        <p>
                           Anyone who has ever loved an animal knows: a part of the soul awakens. We believe in that, and we also believe that access to good things for the mind, body, 
                           and spirit should be simple. With smart offers, quality support, and a secure checkout, you're in good hands.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Open since 2006.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                A team with over 10 veterinarians.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Quality is our priority.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#" target="_blank" className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contact us via WhatsApp
                            </a>

                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2">
                                <MapPin className="w-5 h-5 text-black" />
                                Store Address
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}