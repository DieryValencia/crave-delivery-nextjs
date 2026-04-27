import React from 'react'

export const FloatingChatButton: React.FC = () => {
  return (
    <button className="fixed right-6 bottom-32 w-14 h-14 bg-primary-container text-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(255,94,94,0.3)] z-40 active:scale-90 transition-transform hover:opacity-90">
      <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
    </button>
  )
}
