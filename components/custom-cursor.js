import { useEffect, useRef, useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const CURSOR_SELECTOR =
  'a, button, [role="button"], [data-cursor-hover], .chakra-linkbox, [tabindex="0"]'

const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const ringBorder = useColorModeValue(
    'rgba(17, 24, 39, 0.45)',
    'rgba(226, 232, 240, 0.58)'
  )
  const dotColor = useColorModeValue(
    'rgba(17, 24, 39, 0.75)',
    'rgba(226, 232, 240, 0.85)'
  )
  const hoverRing = useColorModeValue(
    'rgba(45, 212, 191, 0.55)',
    'rgba(45, 212, 191, 0.65)'
  )

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateState = () => setIsEnabled(media.matches)
    updateState()

    media.addEventListener('change', updateState)
    return () => media.removeEventListener('change', updateState)
  }, [])

  useEffect(() => {
    if (!isEnabled) return undefined

    let animationFrame = null
    const position = { x: -100, y: -100 }
    const target = { x: -100, y: -100 }

    const move = event => {
      target.x = event.clientX
      target.y = event.clientY
      setIsVisible(true)
    }

    const onMouseOut = () => setIsVisible(false)
    const onMouseOver = event => {
      const interactive = event.target.closest(CURSOR_SELECTOR)
      setIsHovering(Boolean(interactive))
    }

    const loop = () => {
      position.x += (target.x - position.x) * 0.2
      position.y += (target.y - position.y) * 0.2

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`
        ringRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`
      }

      animationFrame = window.requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    animationFrame = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <>
      <Global
        styles={`
          @media (hover: hover) and (pointer: fine) {
            body, a, button, [role="button"], .chakra-linkbox, [data-cursor-hover] {
              cursor: none !important;
            }
            input, textarea, pre, code {
              cursor: text !important;
            }
          }
        `}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '40px' : '26px',
          height: isHovering ? '40px' : '26px',
          borderRadius: '9999px',
          border: `1px solid ${isHovering ? hoverRing : ringBorder}`,
          pointerEvents: 'none',
          zIndex: 1000,
          marginLeft: isHovering ? '-20px' : '-13px',
          marginTop: isHovering ? '-20px' : '-13px',
          opacity: isVisible ? 1 : 0,
          transition:
            'opacity 200ms ease, width 200ms ease, height 200ms ease, margin 200ms ease, border-color 200ms ease'
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '7px' : '6px',
          height: isHovering ? '7px' : '6px',
          borderRadius: '9999px',
          background: dotColor,
          pointerEvents: 'none',
          zIndex: 1001,
          marginLeft: isHovering ? '-3.5px' : '-3px',
          marginTop: isHovering ? '-3.5px' : '-3px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 180ms ease, width 200ms ease, height 200ms ease'
        }}
      />
    </>
  )
}

export default CustomCursor
