export const metadata = {
  title: 'PDF Viewer',
};

export default function PdfViewer({ searchParams }) {
  const file = searchParams?.file || 'desktop.pdf';
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <iframe
        title="Reference PDF"
        src={`/screenshots/${file}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
