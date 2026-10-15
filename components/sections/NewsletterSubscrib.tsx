"use client";

import { useState } from "react";

export default function NewsletterSubscrib() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!email) {
            setError("Please enter email");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch(
                "https://api.hsforms.com/submissions/v3/integration/submit/4931918/b9f58590-084e-46ff-bdc2-e9a78ac94ee2",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fields: [
                            {
                                name: "email",
                                value: email,
                            },
                        ],
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title,
                        },
                    }),
                }
            );

            if (res.ok) {
                setSuccess(true);
                setEmail("");
            } else {
                setError("Something went wrong");
            }
        } catch (err) {
            setError("Submission failed");
        }

        setLoading(false);
    };

    return (
        <section className="newsletter-section relative overflow-hidden py-[30px]">
            <div className="max-w-5xl mx-auto px-[10px]">
                <div className="grid grid-cols-12 md:gap-x-[30px] gap-y-[30px] items-center">

                    {/* Text */}
                    <div className="md:col-span-5 col-span-12">
                        <div className="text-[1rem] text-center md:text-right font-bold leading-[1.2] text-black">
                            Stay Informed<br />Subscribe to Our #PhilSec Newsletter
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-6 col-span-12">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Please enter your official email address*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 rounded-tl-[8px] rounded-bl-[8px] border border-black text-black !border-r-0 focus:outline-none"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-black opacity-100 w-[150px] p-3 rounded-tr-[8px] rounded-br-[8px] text-white font-bold uppercase cursor-pointer"
                                >
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                            </div>

                            {/* Messages */}
                            {success && (
                                <p className="text-green-400 text-sm">
                                    ✅ Successfully subscribed!
                                </p>
                            )}

                            {error && (
                                <p className="text-red-400 text-sm">
                                    ❌ {error}
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
}