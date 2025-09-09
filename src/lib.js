import "./styles/tailwind.css";
// Layouts
export { default as MainLayout } from './layouts/MainLayout';

// Modules
export { default as Home } from './modules/home';
export { default as Contact } from './modules/contact';

// UI
export { default as Link } from './ui/link';
export { default as Logo } from './ui/logo';
export { default as Title } from './ui/title';

// Auth
export { default as Login } from './ui/auth/login';
export { default as Azure } from './ui/auth/login/azure';
export { default as ChangePassword } from './ui/auth/change-password';
export { default as ResetPassword } from './ui/auth/reset-password';

// Buttons
export { default as DefaultButton } from './ui/buttons/default/Button';
export { default as ScrollToTopButton } from './ui/buttons/scroll-to-top/ScrollToTopButton';

// Footer
export { default as Footer } from './ui/footer/Footer';

// Header
export { default as Header } from './ui/header/Header';

// Icon
export { default as Icon } from './ui/icon/Icon';

// Image
export { default as Image } from './ui/image/Image';

// Inputs
export { default as InputCheckbox } from './ui/inputs/checkbox/InputCheckbox';
export { default as ColorChange } from './ui/inputs/color-change/ColorChange';
export { default as InputDate } from './ui/inputs/date/InputDate';
export { default as InputEmail } from './ui/inputs/email/InputEmail';
export { default as InputFile } from './ui/inputs/file/InputFile';
// Ajoute ici les autres inputs si besoin (hidden, image, multi-select, number, password, radio, search, single-select, text, textarea)

// Label
export { default as Label } from './ui/label/Label';

// PopUp
export { default as PopUp } from './ui/pop-up/PopUp';

// SnackBar
export { default as SnackBar } from './ui/snackbar/SnackBar';

// UserMenu
export { default as UserMenu } from './ui/user-menu/UserMenu';

// ...existing code...
// Utils
// ...existing code...
// Utils
// ...existing code...
export { default as Redirect } from './utils/Redirect';
export * as fileUtils from './utils/fileUtils';
export { useLocalStorage } from './utils/useLocalStorage';
// ...existing code...