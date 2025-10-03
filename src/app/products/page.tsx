import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Clear Aligners</h2>
          <p>Invisible, comfortable, and easy-to-use aligners for teeth straightening.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Retainers</h2>
          <p>Custom retainers to keep your smile perfect after treatment.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
