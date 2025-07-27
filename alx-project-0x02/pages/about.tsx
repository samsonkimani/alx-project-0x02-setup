import React from "react";
import Button from "@/components/common/Button";

const About:React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700">This page contains information about our application.</p>

            <div>
                <Button onClick={() => alert("Button Clicked!")} title="Learn More" styles="ml-2 rounded-sm" />
                <Button onClick={() => alert("Contact Us!")} title="Contact Us" styles="ml-2 rounded-full" />
                <Button onClick={() => alert("Feedback Sent!")} title="Send Feedback" styles="ml-2 rounded-md" />
            </div>
        </div>
    );
}
export default About;