export interface User {
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: Post) => void;
}

export interface Post {
    id: string;
    title: string;
    content: string;
}

export interface ButtonProps {
    styles?: string;
    onClick?: () => void;
    title?: string;
}