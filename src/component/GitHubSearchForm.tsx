import Link from 'next/link';
import React from 'react';

interface Props {
  handleSubmit: (e: React.FormEvent) => void;
  setOwner: (value: string) => void;
  setRepo: (value: string) => void;
  setModuleName: (value: string) => void;
  error: string;
  results: { path: string }[];
}

const GitHubSearchForm: React.FC<Props> = ({
  handleSubmit,
  setOwner,
  setRepo,
  setModuleName,
  error,
  results
}) => {
  return (
    <div className="container mx-auto px-4">
      <div
      style={{
        margin: 'auto'
      }}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <form style={{
            padding: '1.5rem'
        }} onSubmit={handleSubmit}>
          <h2 style={{
                font: 'bold',
                fontSize: '24px',
                lineHeight: '24px',
                marginBottom: '1.5rem'
          }}>GitHub Module Search</h2>
          <div style={{marginBottom: '1rem'}}>
            <label
                htmlFor="owner">
              Owner
            </label>
            <input
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '360px',
                padding: '0.5rem',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
              }}
              id="owner"
              type="text"
              placeholder="Owner"
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label htmlFor="repo">
              Repository
            </label>
            <input
            style={{
                display: 'block',
                width: '100%',
                maxWidth: '360px',
                padding: '0.5rem',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
              }}
              id="repo"
              type="text"
              placeholder="Repository"
              onChange={(e) => setRepo(e.target.value)}
            />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label htmlFor="moduleName">
              Module Name
            </label>
            <input
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '360px',
                padding: '0.5rem',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
              }}
              id="moduleName"
              type="text"
              placeholder="Module Name"
              onChange={(e) => setModuleName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
            style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: '#ffffff',
                backgroundColor: '#3b82f6',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease-in-out',
                outline: 'none',
                border: 'none'
            }}
              type="submit"
            >
              Search Module
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="mt-6 max-w-md mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Search Results:</h2>
            <ul
            style={{
                listStyleType: 'disc',
                padding: '0 0 0 1.5rem',
                marginTop: 'calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-y-reverse)))',
                marginBottom: 'calc(0.5rem /* 8px */ * var(--tw-space-y-reverse))'
            }}>
              {results.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.path}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <footer className="mt-8 text-center sticky bottom-0">
        <p className="text-gray-500 text-sm">
          &copy; 2024 <Link href="https://www.linkedin.com/in/aditya3606/" style={{color:'blue'}}>@dev15Aditya</Link>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default GitHubSearchForm;