import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';

export default function prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() !== null) {
    return;
  }

  const heading = $createHeadingNode('h1');
  heading.append($createTextNode('Welcome to the Vanilla JS Lexical Demo!'));
  root.append(heading);
  const quote = $createQuoteNode();
  quote.append(
    $createTextNode(
      `In case you were wondering what the text area at the bottom is – it's the debug view, showing the current state of the editor. `
    )
  );
  root.append(quote);
  const paragraph = $createParagraphNode();
  paragraph.append(
    $createTextNode('This is a demo environment built with '),
    $createTextNode('lexical').toggleFormat('code'),
    $createTextNode('.'),
    $createTextNode(' Try typing in '),
    $createTextNode('some text').toggleFormat('bold'),
    $createTextNode(' with '),
    $createTextNode('different').toggleFormat('italic'),
    $createTextNode(' formats.')
  );
  root.append(paragraph);
}
