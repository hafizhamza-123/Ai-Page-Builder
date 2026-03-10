// Editor page for dynamic websiteId
export default function EditorPage({ params }: { params: { websiteId: string } }) {
  return <div>Editor for website: {params.websiteId}</div>;
}
