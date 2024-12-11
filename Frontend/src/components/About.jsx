import React from 'react';
import Navbar from './Navbar';
const About = () => {
  return (
    <div className="about-container px-4 sm:px-8 lg:px-16 py-20 bg-gray-900 text-gray-200">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            About BookStore
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Welcome to <strong>BookStore</strong>, your premier platform for finding, exploring, and purchasing books online. 
            We combine technology and passion to make books more accessible to everyone, anywhere.
          </p>
        </div>
        
        {/* Our Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Mission</h2>
          <p className="leading-relaxed">
            At <strong>BookStore</strong>, our mission is to promote literacy, spread the joy of reading, 
            and empower book enthusiasts worldwide. We aim to be more than just a bookstore—we want to 
            create a community where people can share, learn, and grow together through the power of books.
          </p>
        </div>
        
        {/* Our Vision Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Vision</h2>
          <p className="leading-relaxed">
            We envision a world where every individual has access to books, knowledge, and resources that 
            inspire creativity, innovation, and personal growth. By leveraging cutting-edge technology, 
            we aim to bridge the gap between readers and books.
          </p>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Why Choose BookStore?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Comprehensive Collection:</strong> Explore books from various genres including fiction, non-fiction, 
              academic, self-help, and more.
            </li>
            <li>
              <strong>Seamless User Experience:</strong> Enjoy a smooth and intuitive interface that makes finding your 
              favorite books a breeze.
            </li>
            <li>
              <strong>Affordable Pricing:</strong> Avail competitive prices and exclusive discounts to save on your favorite books.
            </li>
            <li>
              <strong>Personalized Recommendations:</strong> Get book suggestions based on your reading preferences and history.
            </li>
            <li>
              <strong>Global Accessibility:</strong> Shop from anywhere in the world with reliable shipping and delivery options.
            </li>
          </ul>
        </div>
        
        {/* Working Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create an account and sign in to access the platform.</li>
            <li>Browse through our vast collection of books by genre, author, or title.</li>
            <li>Add your favorite books to the cart or wishlist.</li>
            <li>Complete your purchase with secure payment options.</li>
            <li>Track your orders and enjoy fast delivery to your doorstep.</li>
          </ol>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Join the BookStore Community</h2>
          <p className="text-base leading-relaxed">
            Become a part of a thriving community of book lovers, authors, and readers. 
            Share reviews, discover hidden gems, and celebrate the love of reading with us. 
            Sign up today and start your journey with <strong>BookStore</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
