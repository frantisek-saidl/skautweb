"use client";
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-md transition-colors duration-200 ${className}`}>
      {children}
    </button>
  );
}
