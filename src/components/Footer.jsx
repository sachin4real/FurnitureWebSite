const Footer = () => (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">Panto</h4>
          <p className="text-sm">Comfortable service and all-around facilities.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="text-sm space-y-2">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Furniture</h4>
          <ul className="text-sm space-y-2">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <ul className="text-sm space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10">
        © 2021 Panto | Terms & Conditions | Privacy Policy
      </div>
    </footer>
  );
  
  export default Footer;
  