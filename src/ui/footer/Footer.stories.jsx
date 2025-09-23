// src/ui/footer/Footer.stories.jsx
import Footer from "./Footer";

export default {
  title: "Components/UI/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export const Default = {
  render: () => <Footer>© YourCompany 2025</Footer>,
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
      <div className="flex items-center gap-3">
        <img
          src="./assets/images/logo.svg" // ⚠️ Mets ici ton logo de lib
          alt="Library Logo"
          className="h-6 w-6"
        />
        <span>© YourLibrary 2025</span>
      </div>
    </Footer>
  ),
};
