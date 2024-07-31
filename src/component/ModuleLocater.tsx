"use client"
import React, { useState } from 'react';
import axios from 'axios';
import GitHubSearchForm from './GitHubSearchForm';

interface SearchResult {
  path: string;
}

const GitHubModuleSearch: React.FC = () => {
  const [moduleName, setModuleName] = useState('');
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchModuleInRepo = async (term: string, owner: string, repo: string) => {
    setIsLoading(true);
    setError('');
    setResults([]);

    const query = `"import ${term}" in:file repo:${owner}/${repo} path:src`;
    const url = `/api/github-search?q=${encodeURIComponent(query)}`;

    try {
      const response = await axios.get(url);
      const items = response.data.items;
      if (!items || items.length === 0) {
        setError(`No files found containing: ${term}`);
      } else {
        setResults(items);
      }
    } catch (error) {
      setError('Error occurred while searching. Please try again.');
      console.error('Error in search:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (moduleName) {
      searchModuleInRepo(moduleName, owner, repo);
    }
  };

  return (
    <>
    <GitHubSearchForm
        handleSubmit={handleSubmit}
        setOwner={setOwner}
        setRepo={setRepo}
        setModuleName={setModuleName}
        error={error}
        results={results}
    />
    {
      isLoading && <p className='px-4 font-bold'>Loading....</p>
    }
    </>
  );
};

export default GitHubModuleSearch;