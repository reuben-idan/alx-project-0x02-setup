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
