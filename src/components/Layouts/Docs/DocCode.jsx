'use client';
import { CodeBlock } from 'react-code-block';

function DocCode({ code, language }) {
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="font-mono text-sm p-4 my-4 rounded-lg text-slate-50 bg-slate-800 overflow-x-auto">
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell text-gray-200">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default DocCode;