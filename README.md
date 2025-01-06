# React useEffect Cleanup Function Not Always Called

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function might not always be called as expected. The provided code snippet shows a simple counter component with an effect that logs messages on render and cleanup. This example will help understand the scenarios where cleanup functions are not always called and how to fix such issues.

## Problem

The issue arises primarily when the component unmounts prematurely (before the cleanup function can execute), or when another effect re-renders the component faster than the cleanup can finish. This leads to unexpected behavior such as memory leaks or incomplete cleanup actions.

## Solution

The solution file provides a corrected component where the cleanup function is more reliably executed. It focuses on correctly managing asynchronous operations within the effect and preventing premature component unmounting.