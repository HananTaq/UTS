import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CodeViewer from './CodeViewer';

function ProjectDetail() {
  const { projectSlug } = useParams();
  const [showCode, setShowCode] = useState(false);
  const [htmlCode, setHtmlCode] = useState('');
  const [htmlFileExists, setHtmlFileExists] = useState(false);

  const projectName = projectSlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const htmlFilePath = `/${projectName}.html`;

  useEffect(() => {
    if (projectName) {
      fetch(htmlFilePath)
        .then(response => {
          if (response.ok) {
            setHtmlFileExists(true);
            return response.text();
          } else {
            setHtmlFileExists(false);
            return '';
          }
        })
        .then(text => setHtmlCode(text));
    }
  }, [projectName, htmlFilePath]);

  const renderContent = () => {
    if (htmlFileExists) {
      return <CodeViewer filePath={htmlFilePath} htmlCode={htmlCode} showCode={showCode} />;
    } else {
      const imageUrl = `/assets/${projectName}.png`; // Fallback to image if no HTML
      return (
        <>
          <img src={imageUrl} alt={projectName} className="project-detail-image" />
          <p>This is the detail page for {projectName}.</p>
          <p>No HTML file found for this project.</p>
        </>
      );
    }
  };

  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <Link to="/" className="back-button">← Back</Link>
        <h1>{projectName}</h1>
        {htmlFileExists && (
          <button onClick={() => setShowCode(!showCode)} className="view-code-button">
            {showCode ? 'View Page' : 'View Code'}
          </button>
        )}
      </header>
      <main className="project-detail-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default ProjectDetail;
