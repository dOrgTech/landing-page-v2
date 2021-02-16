import { useState, useEffect } from 'react'
import {Member} from "../constants/members";
import {getMembers} from "./network";


// debounce a value
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}


export interface WindowSize {
  width: number;
  height: number;
}
// get window dimensions dynamically
function useWindowSize(): WindowSize {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
    // Empty array ensures that effect is only run on mount and unmount
  }, []);

  return dimensions;
}

// get members from server and return member array
function useMembers(): Member[] {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    if (members.length > 0) return;
    getMembers()
      .then(members => setMembers(members))
      .catch(error => console.log(error))
  }, [members])
  return members
}

export {useWindowSize, useDebounce, useMembers}