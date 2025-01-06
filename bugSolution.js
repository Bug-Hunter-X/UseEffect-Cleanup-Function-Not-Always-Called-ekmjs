```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = false; // Flag to avoid unnecessary cleanup
    const intervalId = setInterval(() => {
      if (!cleanup) {
        console.log('Component rendered');
      }
    }, 1000);

    return () => {
      cleanup = true; // Set flag before clearing the interval
      clearInterval(intervalId);
      console.log('Component cleaning up');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```