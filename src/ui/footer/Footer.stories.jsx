// src/ui/footer/Footer.stories.jsx
import Footer from "./Footer";

export default {
  title: "Components/UI/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export const TextCentered = {
  render: () =>
    <Footer>
      <div className="flex justify-center">
        © Company 2025
      </div>
    </Footer>,
};

export const WithLinks = {
  render: () => (
    <Footer>
      <div className="flex gap-6">
        <a href="/about" className="text-primary hover:underline">
          About
        </a>
        <a href="/contact" className="text-primary hover:underline">
          Contact
        </a>
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
      </div>
    </Footer>
  ),
};

export const WithLogo = {
  render: () => (
    <Footer>
      <div className="flex items-center gap-10 text-primary">
        <img
          src="./assets/images/logo.svg"
          alt="Library Logo"
          className="h-8"
        />
        <span>© YourLibrary 2025</span>
      </div>
    </Footer>
  ),
};
