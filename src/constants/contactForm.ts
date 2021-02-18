// Hubspot integration
const portal_id = '9179421'
const form_Guid = '07830d49-e3c4-4df2-9f60-6f3ab8f68fb6'
export const HUBSPOT_URI = `https://api.hsforms.com/submissions/v3/integration/submit/${portal_id}/${form_Guid}`;

// Input placeholders and button image
export const NAME_PLACEHOLDER = 'Your Name';
export const EMAIL_PLACEHOLDER = 'Email';
export const MESSAGE_PLACEHOLDER = 'Message';
export const SUBMIT_BUTTON_IMG_PATH = "/imgs/circled-arrow-icon.svg";

// Form input validation parameters and error messages
export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 6000;
export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const ERROR_NAME_REQUIRED = 'Your name is required';
export const ERROR_EMAIL_REQUIRED = 'Your email is required';
export const ERROR_MESSAGE_REQUIRED = 'Tell us what we can do for you';
export const ERROR_INVALID_EMAIL = 'Enter a valid email address';
export const ERROR_EXCEEDS_LENGTH = (chars: number, max: number): string => {return `${chars}/${max} characters`};

// Text that appears in SnackBar upon form submission
export const SUCCESS_TEXT = 'Submission succeeded!';
export const FAIL_TEXT = 'Submission failed :(';

// Toast duration
export const TOAST_DURATION = 4000;