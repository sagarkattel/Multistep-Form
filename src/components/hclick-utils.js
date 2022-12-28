// hclick-utils.js

export const setHclickValues = (currentPage, setHclick1, setHclick2, setHclick3, setHclick4) => {
    if (currentPage === '/') {
      setHclick1(true);
    } else if (currentPage === '/plan') {
      setHclick2(true);
    } else if (currentPage === '/ads') {
      setHclick3(true);
    } else if (currentPage === '/summary') {
      setHclick4(true);
    }
  }