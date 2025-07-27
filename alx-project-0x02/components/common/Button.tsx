import { ButtonProps } from "@/interfaces";
import React from "react";

const Button:React.FC<ButtonProps> = ({title, styles, onClick}) => {
    return (
        <button 
            className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${styles}`} 
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;