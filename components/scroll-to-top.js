import { useEffect, useState } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion.div
const SCROLL_THRESHOLD = 320

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const bg = useColorModeValue('whiteAlpha.900', 'gray.700')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const iconColor = useColorModeValue('gray.800', 'white')

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '24px',
            zIndex: 30
          }}
        >
          <IconButton
            aria-label="Scroll to top"
            icon={<ChevronUpIcon boxSize={6} color={iconColor} />}
            onClick={scrollToTop}
            borderRadius="full"
            size="lg"
            bg={bg}
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="lg"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
            _active={{ transform: 'translateY(0)' }}
          />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
