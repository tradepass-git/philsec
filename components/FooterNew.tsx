import React from 'react'

const FooterNew = () => {
    return (
        <footer className="bg-black relative overflow-hidden py-[20px] pt-[100px]">
            <div className="mx-auto w-full flex flex-col gap-[60px]">
                <div className="max-w-7xl mx-auto w-full px-[10px]">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="xl:col-span-6 flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white text-[clamp(1.2rem,4vw,2.53rem)]">#PhilSec</h3>
                            <p className="flex flex-col gap-[10px] w-full md:w-[70%]">
                                Champions of cybersecurity since 2021, PhilSec leads the charge to secure the digital landscape of the Philippines.
                            </p>
                        </div>
                        <div className="xl:col-span-3 flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white">About Tradepass</h3>
                            <p className="flex flex-col gap-[10px]">
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">About Us</a>
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Events</a>
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Contact Us</a>
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Blogs</a>
                            </p>
                        </div>
                        <div className="xl:col-span-3 flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white">Quick Links</h3>
                            <p className="flex flex-col gap-[10px]">
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Sponsorship Opportunities</a>
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Speaking Opportunities</a>
                                <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Media Enquiries</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-b border-[#6f7aa27d] py-[20px]">
                    <div className="max-w-7xl mx-auto w-full px-[10px]">
                        <div className="grid grid-cols-12 gap-[30px] items-center">
                            <div className="xl:col-span-6"><a href="/"><img src="/images/Tradepass-White-1.png" alt="Tradepass" className="w-auto" /></a></div>
                            <div className="xl:col-span-6 flex gap-[60px]">
                                <p className="font-bold text-white">Socials</p>
                                <p className="flex gap-[40px]">
                                    <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Linkedin</a>
                                    <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Instagram</a>
                                    <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">X</a>
                                    <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Facebook</a>
                                    <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">YouTube</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-[80px] px-[10px]">
                    <div className="relative h-50 overflow-hidden">
                        <div className="font-inter -tracking-xl absolute top-0 left-0 justify-start text-[132px] leading-[100%] font-medium opacity-25 md:text-[240px] lg:text-[230px] bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(52,52,52,0.64)_100%)] bg-clip-text text-transparent">Contact Us</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white uppercase">India</h3>
                            <p className="flex flex-col text-[0.9rem] gap-[10px] w-full md:w-[100%] leading-1.4 text-gray-400">
                                7th Floor, South Tower, Vaishnavi Tech Park, Bellandur Gate,Sarjapur Main Rd, Ambalipura, Bengaluru, Karnataka 560102
                            </p>
                            
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white">UAE</h3>
                            <p className="flex flex-col text-[0.9rem] gap-[10px] w-full md:w-[100%] leading-1.4 text-gray-400">
                                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white uppercase">Philippines</h3>
                            <p className="flex flex-col text-[0.9rem] gap-[10px] w-full md:w-[100%] leading-1.4 text-gray-400">
                                170 3/F Salcedo One Centre Salcedo St., St. Legazpi Village San Lorenzo Makati, City of Makati, Fourth District, National Capital Region (Ncr), 1223.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h3 className="font-bold text-white uppercase">INQUIRY</h3>
                            <div className="flex flex-col">
                                <p className="text-gray-400">P +91 80 6166 4401</p>
                                <p className="text-gray-400">E info@tradepassglobal.com</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-400">P +91 80 6166 4401</p>
                                <p className="text-gray-400">E info@tradepassglobal.com</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-400">P +91 80 6166 4401</p>
                                <p className="text-gray-400">E info@tradepassglobal.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center px-[20px] border-t border-[#6f7aa27d] pt-[20px]">
                    <p className="text-gray-400">All rights reserved. © {new Date().getFullYear()} Tradepass LLP.</p>
                    <div className="flex gap-[60px]">
                        <p className="flex gap-[20px] items-center text-gray-400">
                            <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Terms of Use</a>
                            <span className="w-[1px] h-[15px] bg-gray-600"></span>
                            <a href="" target="_blank" className="hover:text-[var(--secondary-color)]">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterNew