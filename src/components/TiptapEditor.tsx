'use client';

import React, {useEffect, useState} from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import EditorToolbar from './EditorToolbar';
import BubbleTool from "@/components/BubbleTool";
import {Color} from "@tiptap/extension-color";
import {TextStyle} from "@tiptap/extension-text-style";
import Highlight from '@tiptap/extension-highlight';

const TiptapEditor: React.FC = () => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color.configure({ types: ['textStyle'] }),
            Highlight.configure({ multicolor: true }),

        ],
        content: '<p>Welcome to Tiptap Editor!</p>',
        immediatelyRender: false,
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // 서버에서는 렌더링하지 않음

    return (
        <div className="max-w-3xl mx-auto my-4 bg-white border border-gray-300 rounded-md shadow-sm">
            { editor && <BubbleTool editor={editor}/> }
            <EditorToolbar editor={editor} />
            <div className="p-4 min-h-[300px]">
                <EditorContent
                    editor={editor}
                    className="focus:outline-none list-decimal list-outside
                               [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-4
                               [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-4
                               [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-4"
                />
            </div>
        </div>
    );
};

export default TiptapEditor;
