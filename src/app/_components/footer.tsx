import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {

    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className="container mx-auto px-4" data-aos="fade-up">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Our Partners</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12 mt-5 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop</h3>
                        <p className="mb-4">Caring for your best friend with love and dedication</p>
                        <a href="#" target="_blank" className="bg-green-500 px-4 py-2 rounded-md">Contact us via WhatsApp</a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contacts</h3>
                        <p>Email: petshop@email.com</p>
                        <p>Phone: (XX) 1234-5678</p>
                        <p>Rua X, Downtown, Porto Belo | SC</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
                        <div className="flex gap-4">
                            <a href="#"><FacebookLogoIcon className="w-8 h-8"/></a>
                            <a href="#"><InstagramLogoIcon className="w-8 h-8"/></a>
                            <a href="#"><YoutubeLogoIcon className="w-8 h-8"/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}
