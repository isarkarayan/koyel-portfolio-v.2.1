import React from 'react';

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}