import React from 'react';
import { Editor } from '@tiptap/react';

interface BackgroundColorPickerProps {
    editor: Editor;
}

const BackgroundColorPicker: React.FC<BackgroundColorPickerProps> = ({ editor }) => {
    if (!editor) return null;

    const backgroundColors = [
        { color: '#FFD700', label: 'Yellow' },
        { color: '#FF6347', label: 'Tomato' },
        { color: '#ADFF2F', label: 'GreenYellow' },
        { color: '#87CEEB', label: 'SkyBlue' },
        { color: '#FFB6C1', label: 'LightPink' },
    ];

    return (
        <div className="flex items-center gap-2">
            {/* 색깔 팔레트 */}
            <input
                type="color"
                onInput={(event) => editor.chain().focus().setHighlight({ color: (event.target as HTMLInputElement).value }).run()}
                className="w-6 h-6 p-0 border border-gray-300 rounded-full cursor-pointer"
                aria-label="Select background color"
            />
            {/* 지정색 버튼 */}
            {backgroundColors.map(({ color, label }) => (
                <button
                    key={color}
                    onClick={() => editor.chain().focus().setHighlight({ color }).run()} // 색상 코드 전달
                    className={`w-6 h-6 rounded-full ${editor.isActive('highlight', { color }) ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color }}
                    title={label}
                >
                    <span className="sr-only">{label}</span>
                </button>
            ))}

            {/* 초기화 */}
            <button
                onClick={() => editor.chain().focus().unsetHighlight().run()}
                className="p-1 text-xs text-gray-700 border border-gray-400 rounded hover:bg-gray-300"
            >
                X
            </button>
        </div>
    );
};

export default BackgroundColorPicker;
