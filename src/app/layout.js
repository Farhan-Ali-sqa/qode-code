import "./globals.css";
import ContactForm from "../components/ContactForm";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header, nav, etc. */}
        {/* ...all your sections... */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}