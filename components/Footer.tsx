"use client";
import { useState } from 'react'
import Link from "next/link";
import Modal from './ui/Modal';
export default function Footer() {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [hubspotId, setHubspotId] = useState<string>("");
    return (
        <>
            <footer className="bg-black footerBG">
                <div className="max-w-7xl mx-auto w-full px-[10px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 py-[60px] gap-[30px]">
                        <div className="flex"><Link href="/"><img src="/images/Tradepass-White-1.png" alt="Tradepass" className="w-auto" /></Link ></div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[1.1rem] text-white font-black">ABOUT TRADEPASS</div>
                            <ul className="space-y-[10px]">
                                <li><a id="sss-about-us" className="text-white hover:text-[var(--secondary-color)]" href="https://tradepassglobal.com/about-us/" target="_blank">About Us</a></li>
                                <li><a id="sss-events" className="text-white hover:text-[var(--secondary-color)]" href="https://tradepassglobal.com/events/" target="_blank">Events</a></li>
                                <li><a id="sss-contact-us" className="text-white hover:text-[var(--secondary-color)]" href="https://tradepassglobal.com/contact-us/" target="_blank">Contact Us</a></li>
                                <li><a id="sss-contact-us" className="text-white hover:text-[var(--secondary-color)]" href="/blogs/">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[1.1rem] text-white font-black">QUICK LINKS</div>
                            <ul className="space-y-[10px]">
                                <li><a id="sss-sponsor-op" className="text-white hover:text-[var(--secondary-color)]" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    setHubspotId("2c418430-5acc-4e80-b1af-ca16f114bc41");
                                    setModalTitle("Sponsorship Opportunities");
                                    setOpen(true);
                                }}>Sponsorship Opportunities</a></li>
                                <li><a id="sss-speaking-op" className="text-white hover:text-[var(--secondary-color)]" href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setHubspotId("1f8c6351-ecc1-45c7-9679-4bd24e18d055");
                                        setModalTitle("Speaking Opportunities");
                                        setOpen(true);
                                    }}>Speaking Opportunities</a></li>
                                <li><a id="sss-media" className="text-white hover:text-[var(--secondary-color)]" href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setHubspotId("6d7717be-8ca0-4213-826e-062dd1840d43");
                                        setModalTitle("Media Enquiries");
                                        setOpen(true);
                                    }}>Media Enquiries</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[1.1rem] text-white font-black">TERMS & CONDITIONS</div>
                            <ul className="space-y-[10px]">
                                <li><a id="sss-general-tc" className="text-white hover:text-[var(--secondary-color)]" href="https://tradepassglobal.com/termsconditions/" target="_blank">General T&C Policy</a></li>
                                <li><a id="sss-privacy-policy" className="text-white hover:text-[var(--secondary-color)]" href="https://tradepassglobal.com/privacypolicy/" target="_blank">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[1.1rem] text-white font-black">FOLLOW US</div>
                            <ul className="flex space-x-[10px]">
                                <li className='w-[25px] h-[25px] border border-[var(--secondary-color)] rounded-[50%] text-center flex items-center justify-center'>
                                    <a href="https://www.linkedin.com/company/tradepassglobal/" target="_blank" className='text-[var(--secondary-color)] text-[12px] leading-[25px]'>
                                        <svg className="footer-social-icon fill-[var(--secondary-color)] w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.9972 24.0002L24.0032 23.9992V15.1972C24.0032 10.8912 23.0762 7.57422 18.0422 7.57422C15.6222 7.57422 13.9982 8.90222 13.3352 10.1612H13.2652V7.97622H8.49219V23.9992H13.4622V16.0652C13.4622 13.9762 13.8582 11.9562 16.4452 11.9562C18.9942 11.9562 19.0322 14.3402 19.0322 16.1992V24.0002H23.9972Z"
                                                fill="e22344"></path>
                                            <path d="M0.398438 7.97656H5.37444V23.9996H0.398438V7.97656Z" fill="e22344"></path>
                                            <path
                                                d="M2.882 0C1.291 0 0 1.291 0 2.882C0 4.473 1.291 5.791 2.882 5.791C4.473 5.791 5.764 4.473 5.764 2.882C5.763 1.291 4.472 0 2.882 0Z"
                                                fill="e22344"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className='w-[25px] h-[25px] border border-[var(--secondary-color)] rounded-[50%] text-center flex items-center justify-center'>
                                    <a href="https://twitter.com/Tradepassglobal" target="_blank" className='text-[var(--secondary-color)] text-[12px] leading-[25px]'>
                                        <svg className="footer-social-icon fill-[var(--secondary-color)] w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.392 2H20.825L14.04 10.744L22 22H15.711L10.957 15.423L5.513 22H2.078L9.3 12.767L1.999 2H8.444L12.686 8.016L17.392 2ZM16.292 19.953H18.023L7.79 3.953H5.939L16.292 19.953Z"
                                                fill="e22344" /></svg></a>
                                </li>
                                <li className='w-[25px] h-[25px] border border-[var(--secondary-color)] rounded-[50%] text-center flex items-center justify-center'>
                                    <a href="https://www.instagram.com/tradepass_global/" target="_blank" className='text-[var(--secondary-color)] text-[12px] leading-[25px]'><svg
                                        className="footer-social-icon fill-[var(--secondary-color)] w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.4208 0H6.57923C2.95144 0 0 2.95144 0 6.57928V17.4208C0 21.0486 2.95144 24 6.57923 24H17.4208C21.0486 24 24 21.0486 24 17.4208V6.57928C24 2.95144 21.0486 0 17.4208 0ZM12 18.5828C8.37023 18.5828 5.4173 15.6298 5.4173 12C5.4173 8.37023 8.37028 5.41734 12 5.41734C15.6297 5.41734 18.5828 8.37028 18.5828 12C18.5828 15.6297 15.6297 18.5828 12 18.5828ZM18.9765 7.02356C17.8737 7.02356 16.9765 6.12637 16.9765 5.02359C16.9765 3.92081 17.8737 3.02358 18.9765 3.02358C20.0792 3.02358 20.9764 3.92077 20.9764 5.02355C20.9764 6.12633 20.0792 7.02356 18.9765 7.02356Z"
                                            fill="e22344"></path>
                                    </svg></a>
                                </li>
                                <li className='w-[25px] h-[25px] border border-[var(--secondary-color)] rounded-[50%] text-center flex items-center justify-center'>
                                    <a href="https://www.youtube.com/channel/UCFp9q3bmmTR8N6uDIdswaSg?sub_confirmation=1"
                                        target="_blank" className='text-[var(--secondary-color)] text-[12px] leading-[25px]'><svg className="footer-social-icon fill-[var(--secondary-color)] w-[10px] h-[10px]" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M23.4986 6.18614C23.2222 5.13412 22.3895 4.30145 21.3375 4.02502C19.5055 3.5293 12 3.5293 12 3.5293C12 3.5293 4.49453 3.5293 2.66254 4.02502C1.61051 4.30145 0.777844 5.13412 0.501414 6.18614C0 8.02346 0 12.0002 0 12.0002C0 12.0002 0 15.9769 0.501414 17.8142C0.777844 18.8662 1.61051 19.6989 2.66254 19.9753C4.49453 20.471 12 20.471 12 20.471C12 20.471 19.5055 20.471 21.3375 19.9753C22.3895 19.6989 23.2222 18.8662 23.4986 17.8142C24 15.9769 24 12.0002 24 12.0002C24 12.0002 24 8.02346 23.4986 6.18614ZM9.52941 15.2949V8.70544L15.8823 12.0002L9.52941 15.2949Z"
                                                fill="e22344" />
                                        </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[var(--main-color)] p-[10px] text-center text-white">All rights reserved. © {new Date().getFullYear()} Tradepass LLP.</div>
            </footer>
            <Modal
                isOpen={open}
                title={modalTitle}
                formId={hubspotId}
                onClose={() => {
                    setOpen(false);
                }}>
            </Modal>
        </>
    )
}
