import React from "react";
import Button from "@/components/common/Button";

const About:React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700">This page contains information about our application.</p>

            <div>
                <Button label="Small Button" size="small" shape="rounded-sm" />
                <Button label="Medium Button" size="medium" shape="rounded-md" />
                <Button label="Large Button" size="large" shape="rounded-full" />
            </div>
        </div>
    );
}
export default About;