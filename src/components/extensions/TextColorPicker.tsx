// components/ColorPicker.tsx
import React from 'react';
import { Editor } from '@tiptap/react';

interface ColorPickerProps {
    editor: Editor;
}

const TextColorPicker: React.FC<ColorPickerProps> = ({ editor }) => {
    if (!editor) return null;

    const colors = [
        { color: '#958DF1', label: 'Purple' },
        { color: '#F98181', label: 'Red' },
        { color: '#FBBC88', label: 'Orange' },
        { color: '#FAF594', label: 'Yellow' },
        { color: '#70CFF8', label: 'Blue' },
        { color: '#94FADB', label: 'Teal' },
        { color: '#B9F18D', label: 'Green' },
    ];

    return (
        <div className="flex items-center gap-2">
            {/* 팔레트 */}
            <input
                type="color"
                onInput={(event) => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
                value={editor.getAttributes('textStyle').color || '#000000'}
                className="w-6 h-6 p-0 border border-gray-300 rounded-full"
            />

            {/* 지정색 */}
            {colors.map(({ color, label }) => (
                <button
                    key={color}
                    onClick={() => editor.chain().focus().setColor(color).run()}
                    className={`w-6 h-6 rounded-full ${editor.isActive('textStyle', { color }) ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color }}
                    title={label}
                >
                    <span className="sr-only">{label}</span>
                </button>
            ))}

            {/* 초기화 */}
            <button
                onClick={() => editor.chain().focus().unsetColor().run()}
                className="p-1 text-xs text-gray-700 border border-gray-400 rounded hover:bg-gray-300"
            >
                X
            </button>
        </div>
    );
};

export default TextColorPicker;
