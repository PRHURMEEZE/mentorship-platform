import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          Mentorship Platform
        </h1>
        {children}
      </div>
    </div>
  );
};

export default PublicLayout;
