import React from "react";
import Card from "@/components/common/Card";

const Hone:React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Application</h1>
            <p className="text-gray-700">This is the home page of the application.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <Card title="Feature 1" content="Description of feature 1." />
                <Card title="Feature 2" content="Description of feature 2." />
                <Card title="Feature 3" content="Description of feature 3." />
            </div>
        </div>
    );
}

export default Hone;