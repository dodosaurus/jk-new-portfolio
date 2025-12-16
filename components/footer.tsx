import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} dodosaurus. All rights reserved. Built with help of <a className="font-semibold" href="https://www.youtube.com/@ByteGrad">@ByteGrad</a>.
      </small>
    </footer>
  );
}
