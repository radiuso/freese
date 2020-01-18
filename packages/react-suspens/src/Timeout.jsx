import React, { useState, useEffect } from 'react';

export default ({ ms, fallback, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, ms);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? fallback : children;
}
