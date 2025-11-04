import { Highlight, themes } from 'prism-react-renderer';

interface CodeViewerProps {
  filePath: string;
  htmlCode: string;
  showCode: boolean;
}

function CodeViewer({ filePath, htmlCode, showCode }: CodeViewerProps) {
  return (
    <div className="code-viewer-content">
      {showCode ? (
        <Highlight
          theme={themes.vsDark}
          code={htmlCode}
          language="html"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px', margin: 0, height: '100%', overflow: 'auto' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i }) }>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key }) } />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      ) : (
        <iframe
          src={filePath}
          title={filePath}
          className="soal-iframe"
        ></iframe>
      )}
    </div>
  );
}

export default CodeViewer;
