import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false)
    const email = "samirparvez48@gmail.com";

    const copytoClipboard = () => {
        navigator.clipboard.writeText(email).then(()=>{
            setCopied(true)
            setTimeout(() =>{
                setCopied(false)
            },2000)
        }).catch((err)=>{
            
        })
    }
  return (
    <motion.button onClick={copytoClipboard}
    whileHover={{ y: -5}}
    whileTap={{ scale: 1.05}}
     className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
      
      <AnimatePresence mode='wait'>
        { copied ? (
            <motion.p className='flex items-center justify-center gap-2 text-green-300'
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease:"easeInOut"}}
            >
            <img src="assets/copy-done.svg" className='w-5 ' alt="copied-icon" />
            Email has Copied !
            </motion.p>
        ) : (
        <motion.p className='flex items-center justify-center gap-2 text-gray-300'
         key="copy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity: 0 }}
        transition={{ duration: 0.1 }}
        >
            <img className='w-5 text-gray-300' src="assets/copy.svg" alt="copy-icon" />
            Copy Email Address
            </motion.p>)}
     </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton