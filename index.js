```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    router.push('/', undefined, { shallow: true });
  };

  useEffect(() => {
    if (isNavigating && router.route === '/') {
      setIsNavigating(false);
    }
  }, [router.route, isNavigating]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
      {isNavigating && <p>Navigating...</p>}
    </div>
  );
}
```
The solution involves adding a loading state to indicate the navigation progress. We also use `shallow: true` in `router.push` to avoid unnecessary re-rendering, and a useEffect hook to manage the loading state more accurately.