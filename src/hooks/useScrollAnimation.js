import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}