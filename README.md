# Next.js Data Fetching Issue

This repository demonstrates a common issue when fetching data within a Next.js component using `useEffect` hook. The component doesn't render correctly on the initial render and subsequent updates.

## Bug

The `MyComponent` fetches data (simulated with `setTimeout`) and updates its state. However, the initial render shows 'Count: 0', and then it jumps to 'Count: 1' without displaying 'Count: 0'.

## Solution

The solution involves using the `useRef` hook to track the previous state, thus ensuring proper update rendering.