import React from 'react';
import PublicLayout from '../layouts/PublicLayout';

const Unauthorized = () => {
  return (
    <PublicLayout>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          🚫 You are not authorized to view this page.
        </h2>
        <p className="text-gray-600">
          Please log in with the correct account or contact an administrator.
        </p>
      </div>
    </PublicLayout>
  );
};

export default Unauthorized;
