// interfaces/index.ts

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
