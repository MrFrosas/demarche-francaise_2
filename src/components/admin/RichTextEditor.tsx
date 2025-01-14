import { useState, useRef, useEffect } from 'react';
import { Button } from "../ui/button";
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

export const RichTextEditor = ({ value, onChange, onImageUpload }: RichTextEditorProps) => {
  const [previewMode, setPreviewMode] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && !previewMode) {
      editorRef.current.innerHTML = value;
    }
  }, [value, previewMode]);

  const handleCommand = (command: string, value?: string) => {
    if (previewMode) return;
    
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      editorRef.current.focus();
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageUpload) {
      try {
        if (file.size > 5 * 1024 * 1024) { // 5MB max
          throw new Error("L'image ne doit pas dépasser 5MB");
        }
        const url = await onImageUpload(file);
        handleCommand('insertImage', url);
      } catch (error) {
        console.error('Erreur lors du téléchargement de l\'image:', error);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="border rounded-md">
      <div className="border-b p-2 bg-gray-50 flex flex-wrap gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('bold')}
          title="Gras (Ctrl+B)"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('italic')}
          title="Italique (Ctrl+I)"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('formatBlock', '<h1>')}
          title="Titre 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('formatBlock', '<h2>')}
          title="Titre 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('justifyLeft')}
          title="Aligner à gauche"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('justifyCenter')}
          title="Centrer"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('justifyRight')}
          title="Aligner à droite"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('insertUnorderedList')}
          title="Liste à puces"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCommand('insertOrderedList')}
          title="Liste numérotée"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const url = prompt('Entrez l\'URL du lien:');
            if (url) handleCommand('createLink', url);
          }}
          title="Insérer un lien"
        >
          <Link className="h-4 w-4" />
        </Button>
        <label>
          <Button
            variant="ghost"
            size="sm"
            title="Insérer une image"
            asChild
          >
            <div>
              <Image className="h-4 w-4" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </Button>
        </label>
        <div className="flex-grow" />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPreviewMode(!previewMode)}
        >
          {previewMode ? 'Éditer' : 'Prévisualiser'}
        </Button>
      </div>

      {previewMode ? (
        <div 
          className="min-h-[400px] p-4 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <div
          ref={editorRef}
          className="min-h-[400px] p-4 focus:outline-none"
          contentEditable
          onInput={handleInput}
          onPaste={handlePaste}
          dangerouslySetInnerHTML={{ __html: value }}
          suppressContentEditableWarning
        />
      )}
    </div>
  );
};
