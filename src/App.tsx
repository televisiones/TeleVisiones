import { motion } from 'framer-motion'
import { SocialLinks } from './components/SocialLinks'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="container">
      <motion.main 
        className="main-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="info-grid">
          <motion.div variants={itemVariants} className="hero-logo-wrapper">
            <img src="/logo.webp" alt="TeleVisiønes Cooperative" className="hero-logo" />
          </motion.div>

          <motion.div variants={itemVariants} className="info-link-wrapper">
            <a href="https://televisiones.studio/team" className="info-link">televisiones.studio/team</a> <span className="info-hyphen">-</span>
          </motion.div>
          <motion.div variants={itemVariants} className="info-text">
            <strong>TeleVisiønes</strong> is a creative cooperative. Driven by the desire to express inner worlds we create various forms of art, in digital, physical and other forms - only thing that matters is how close can we come to the raw idea.
          </motion.div>

          <motion.div variants={itemVariants} className="info-link-wrapper">
            <a href="https://televisiones.studio/untitlednote" className="info-link">televisiones.studio/untitlednote</a>
          </motion.div>
          <motion.div variants={itemVariants} className="info-text">
            Currently we are working on<br /><strong>UNTITLED NOTE</strong>
          </motion.div>

          <motion.div variants={itemVariants} className="info-link-wrapper">
            <a href="https://televisiones.studio/eda" className="info-link">televisiones.studio/eda</a> <span className="info-hyphen">-</span>
          </motion.div>
          <motion.div variants={itemVariants} className="info-text">
            In our free time and in blisses of inspiration we contribute to the <strong>Exhibition of Digitized Arts</strong>
          </motion.div>

          <motion.div variants={itemVariants} className="down-hand">
            <div className="hand-icon hand-down"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="socials-wrapper">
            <SocialLinks />
          </motion.div>
        </div>
      </motion.main>

      {/* Absolute Positioned Elements */}
      <motion.div className="abs-bottom-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <a href="mailto:contact@televisiones.studio" className="contact-email">contact@televisiones.studio</a>
        <p className="contact-desc">
          For inquiries,<br/>
          applications,<br/>
          collaborations<br/>
          and other information.
        </p>
      </motion.div>

      <motion.div className="abs-bottom-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <img src="/starburst.webp" alt="" className="starburst-img" />
        <div className="copyright">© TeleVisiønes 2026</div>
      </motion.div>

      <motion.div className="abs-bottom-right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <div className="rights-reserved">All Visions reserved</div>
      </motion.div>

      <motion.div className="abs-way-bottom-right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <div className="thats-it">that's it.</div>
      </motion.div>

      <motion.div className="abs-way-bottom-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <div className="up-hand"><div className="hand-icon hand-up"></div></div>
        <div className="go-back">go back</div>
      </motion.div>
    </div>
  )
}

export default App
