import React from "react"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full flex justify-center py-4 text-sm">
      <p>&copy; {currentYear} My Blog. All rights reserved.</p>
    </footer>
  )
}
