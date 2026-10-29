"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: (options: {
                    portalId: string;
                    formId: string;
                    region: string;
                    target: string;
                    css?: string;
                    cssRequired?: string;
                }) => void;
            };
        };
    }
}

interface HubSpotFormProps {
    formId: string;
    portalId?: string;
}

export default function HubSpotForm({ formId, portalId = "4931918" }: HubSpotFormProps) {
    useEffect(() => {
        const targetId = `hubspot-form-${formId}`;

        const createForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId,
                    formId,
                    region: "na1",
                    target: `#${targetId}`,
                    css: "",
                    cssRequired: "",
                });
            }
        };

        const existingScript = document.querySelector(
            'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
        );

        if (existingScript) {
            createForm();
        } else {
            const script = document.createElement("script");
            script.src = "https://js.hsforms.net/forms/embed/v2.js";
            script.charset = "utf-8";
            script.type = "text/javascript";
            script.onload = createForm;

            document.body.appendChild(script);
        }

        return () => {
            const container = document.getElementById(targetId);
            if (container) container.innerHTML = "";
        };
    }, [formId]);

    return <div id={`hubspot-form-${formId}`} />;
}


