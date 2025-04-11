import React, { useState } from "react";
import { Document, Page, pdfjs } from "@react-pdf-viewer/core";
import './resume.css'; 
import pdf from '../../assets/Amarjit Shende#CV.pdf/';




function ResumeViewer() {
  const [numPages, setNumPages] = useState(null); 
 
  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <Document 
        file={pdf} 
        onLoadSuccess={onLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div className="pdf-page" key={`page_${index + 1}`}>
            <Page pageNumber={index + 1} />
          </div>
        ))}
      </Document>
      <a href={pdf} download>
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default ResumeViewer;