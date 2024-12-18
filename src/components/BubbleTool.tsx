import { BubbleMenu } from "@tiptap/react";
import React from "react";
import {FiCode, FiRotateCcw, FiRotateCw, FiXCircle} from "react-icons/fi";
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from "react-icons/md";
import { BsBlockquoteLeft, BsListOl, BsListUl, BsTypeStrikethrough } from "react-icons/bs";
import { BiHeading } from "react-icons/bi";
import { AiFillFormatPainter, AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from "react-icons/ai";
import TextColorPicker from "@/components/extensions/TextColorPicker";
import BackgroundColorPicker from "@/components/extensions/BackgroundColorPicker";

const BubbleTool = ({ editor }: { editor: any }) => {
    return (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="flex flex-wrap items-center gap-2 p-2 bg-gray-200 rounded shadow-md">
            {/* Text Styles */}
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleBold().run()}>
                <AiOutlineBold />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleItalic().run()}>
                <AiOutlineItalic />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <AiOutlineUnderline />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleStrike().run()}>
                <BsTypeStrikethrough />
            </button>

            {/* Headings */}
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                <BiHeading className="text-lg" />
                <span className="sr-only">H1</span>
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <BiHeading className="text-base" />
                <span className="sr-only">H2</span>
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                <BiHeading className="text-sm" />
                <span className="sr-only">H3</span>
            </button>

            {/* List */}
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <BsListUl />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                <BsListOl />
            </button>

            {/* Blockquote and Code Block */}
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                <BsBlockquoteLeft />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                <FiCode />
            </button>

            {/* Text Alignment */}
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                <MdFormatAlignLeft />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                <MdFormatAlignCenter />
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                <MdFormatAlignRight />
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

            {/* Clear Formatting */}
            <button className="p-2 text-red-500 hover:bg-gray-300 rounded" onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
                <FiXCircle />
                <span className="sr-only">Clear Formatting</span>
            </button>

            {/* 구분선 */}
            <div className="w-full border-b border-gray-300 my-2"></div>

            {/* Text Color Picker */}
            <div className="w-full flex items-center gap-2">
                <AiOutlineBold className="text-gray-500" title="Text Color" />
                <TextColorPicker editor={editor} />
            </div>

            {/* Background Color Picker */}
            <div className="w-full flex items-center gap-2 mt-2">
                <AiFillFormatPainter className="text-gray-500" title="Background Color" />
                <BackgroundColorPicker editor={editor} />
            </div>
        </BubbleMenu>
    );
};

export default BubbleTool;
