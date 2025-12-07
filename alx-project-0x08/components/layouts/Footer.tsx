import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-lg font-semibold">Image Generation App</h1>
        <p className="mt-2 text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
        <div className="mt-4">
          <Link href="#"><a className="text-gray-400 hover:text-white mx-2">Privacy Policy</a></Link>
          <Link href="#"><a className="text-gray-400 hover:text-white mx-2">Terms of Service</a></Link>
          <Link href="#"><a className="text-gray-400 hover:text-white mx-2">Contact Us</a></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
