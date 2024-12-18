'use client';

import React from 'react';
import { Editor } from '@tiptap/react';
import { AiFillFormatPainter, AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from 'react-icons/ai';
import { BsTypeStrikethrough, BsListUl, BsListOl, BsBlockquoteLeft } from 'react-icons/bs';
import { FiCode, FiRotateCcw, FiRotateCw, FiXCircle} from 'react-icons/fi';
import { BiHeading } from 'react-icons/bi';
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight } from 'react-icons/md';
import BackgroundColorPicker from "@/components/extensions/BackgroundColorPicker";
import TextColorPicker from "@/components/extensions/TextColorPicker";

interface ToolbarProps {
    editor: Editor | null;
}

const EditorToolbar: React.FC<ToolbarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="p-2 bg-gray-200 border-b border-gray-300 rounded-t-md">
            {/* 첫 줄: 텍스트 스타일, 헤딩, 리스트, 인용 및 코드 블록, 정렬 */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleBold().run()}>
                    <AiOutlineBold/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <AiOutlineItalic/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <AiOutlineUnderline/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <BsTypeStrikethrough/>
                </button>

                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}>
                    <BiHeading className="text-lg"/>
                    <span className="sr-only">H1</span>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}>
                    <BiHeading className="text-base"/>
                    <span className="sr-only">H2</span>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}>
                    <BiHeading className="text-sm"/>
                    <span className="sr-only">H3</span>
                </button>

                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <BsListUl/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <BsListOl/>
                </button>

                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <BsBlockquoteLeft/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                    <FiCode/>
                </button>

                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                    <MdFormatAlignLeft/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    <MdFormatAlignCenter/>
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    <MdFormatAlignRight/>
                </button>

                {/* Undo */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="p-2 text-gray-700 hover:bg-gray-300 rounded disabled:opacity-50"
                >
                    <FiRotateCcw className="text-xl" title="Undo" />
                </button>

                {/* Redo */}
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="p-2 text-gray-700 hover:bg-gray-300 rounded disabled:opacity-50"
                >
                    <FiRotateCw className="text-xl" title="Redo" />
                </button>

                {/* Clear */}
                <button className="p-2 text-red-500 hover:bg-gray-300 rounded"
                        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
                    <FiXCircle/>
                    <span className="sr-only">Clear Formatting</span>
                </button>
            </div>

            {/* 두 번째 줄: 텍스트 컬러 및 배경 컬러 */}
            <div className="flex items-center gap-2">
                {/* 텍스트 컬러 */}
                <div className="flex items-center p-2 bg-gray-200 rounded">
                    <AiOutlineBold className="mr-2 text-gray-500" title="Text Color"/>
                    <TextColorPicker editor={editor}/>
                </div>

                {/* 배경 컬러 */}
                <div className="flex items-center p-2 bg-gray-200 rounded">
                    <AiFillFormatPainter className="mr-2 text-gray-500" title="Background Color"/>
                    <BackgroundColorPicker editor={editor}/>
                </div>
            </div>
        </div>
    );
};

export default EditorToolbar;
