'use client';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';

function Terminal({ text }) {
  return (
    <CodeBlock code={text} language="shell" theme={themes.oceanicNext}>
      <CodeBlock.Code className="font-mono text-sm p-4 my-4 rounded-lg bg-slate-800 overflow-x-auto">
        <div className="table-row">
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default Terminal;