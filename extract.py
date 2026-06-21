import sys
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    """
    Extracts text from a docx file without external dependencies.
    """
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            # The namespace for WordprocessingML
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            PARA = WORD_NAMESPACE + 'p'
            TEXT = WORD_NAMESPACE + 't'
            
            text = []
            for paragraph in tree.iter(PARA):
                texts = [node.text for node in paragraph.iter(TEXT) if node.text]
                if texts:
                    text.append(''.join(texts))
            
            return '\n'.join(text)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python extract.py <path_to_docx>")
        sys.exit(1)
        
    output_text = extract_text_from_docx(sys.argv[1])
    with open('최인남_자기소개서.txt', 'w', encoding='utf-8') as f:
        f.write(output_text)
    print("Extraction complete. Saved to 최인남_자기소개서.txt")
