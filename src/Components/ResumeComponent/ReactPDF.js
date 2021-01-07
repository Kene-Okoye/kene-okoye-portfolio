import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf"




function PDF({CV}) {
    pdfjs.GlobalWorkerOptions.workerSrc = //cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }



    return (
        <div>
            <Document
            // file={{url: http://localhost:3000/documents/${CV} }}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        )
    }

    export default PDF;