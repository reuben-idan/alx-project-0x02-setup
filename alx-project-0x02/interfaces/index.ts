// interfaces/index.ts
import { type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The size variant of the button */
  size?: "small" | "medium" | "large";
  /** The shape variant of the button */
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

/**
 * @interface CardProps
 * @description Interface for the reusable Card component props
 */
export interface CardProps {
  /** The title to be displayed in the card */
  title: string;
  /** The content text to be displayed in the card */
  content: string;
}

export interface PostProps {
  /** The title of the post */
  title: string;
  /** The content of the post */
  content: string;
  /** The ID of the user who created the post */
  userId: number;
}

/**
 * @interface PostProps
 * @description Interface for the PostCard component props
 */
export interface PostProps {
  /** The title of the post */
  title: string;
  /** The content of the post */
  content: string;
  /** The ID of the user who created the post */
  userId: number;
}

/**
 * @interface Post
 * @description Interface for the post data from the API
 */
export interface Post {
  /** The unique identifier of the post */
  id: number;
  /** The title of the post */
  title: string;
  /** The body/content of the post */
  body: string;
  /** The ID of the user who created the post */
  userId: number;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  /** Whether the modal is currently visible */
  isOpen: boolean;
  /** Function to call when the modal should be closed */
  onClose: () => void;
  /** Function to call when the form is submitted */
  onSubmit: (data: PostData) => void;
}

export interface ButtonProps {
  /** The text content of the button */
  children: React.ReactNode;
  /** The size variant of the button */
  size?: "small" | "medium" | "large";
  /** The shape variant of the button */
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  /** Optional click handler */
  onClick?: () => void;
  /** Optional type attribute */
  type?: "button" | "submit" | "reset";
  /** Optional additional className */
  className?: string;
}
