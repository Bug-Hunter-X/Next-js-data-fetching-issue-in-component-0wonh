```javascript
// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);
  const prevCount = React.useRef(0);

  React.useEffect(() => {
    // Simulate an API call that takes time
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [count]);

  React.useEffect(() => {
    if (prevCount.current !== count) {
      console.log('Count updated:', count);
    }
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```