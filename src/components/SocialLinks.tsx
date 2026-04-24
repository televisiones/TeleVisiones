import { motion } from 'framer-motion';

const row1 = [
  { name: 'Bluesky', file: 'Bluesky.webp', url: 'https://bsky.app/profile/televisiones.studio' },
  { name: 'YouTube', file: 'Youtube.webp', url: 'https://www.youtube.com/@' },
  { name: 'Instagram', file: 'Instagram.webp', url: 'https://www.instagram.com/televisiones.studio' },
  { name: 'Twitter', file: 'Twitter.webp', url: 'https://x.com/televisionesx' },
  { name: 'VK', file: 'VK.webp', url: 'https://vk.com/televisiones' },
  { name: 'Telegram', file: 'Telegram.webp', url: 'https://t.me/televisiones_studio' },
  { name: 'Discord', file: 'Discord.webp', url: 'https://discord.gg/dctRuSbe8R' }
];

const row2 = [
  { name: 'Itch.io', file: 'ItchIO.webp', url: 'https://televisiones.itch.io/untitled-note' },
  { name: 'Game Jolt', file: 'Gamejolt.webp', url: 'https://gamejolt.com/games/un-1/851477' },
  { name: 'Steam', file: 'Steam.webp', url: '#' }
];

export function SocialLinks() {
  return (
    <div className="social-rows">
      <div className="social-links-row">
        {row1.map((icon) => (
          <motion.a 
            key={icon.name} 
            href={icon.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link" 
            whileHover={{ scale: 1.2 }}
            title={icon.name}
          >
            <img src={`/socials_v3/${icon.file}`} alt={icon.name} className="social-icon-img" />
          </motion.a>
        ))}
      </div>
      <div className="social-links-row social-row-center">
        {row2.map((icon) => (
          <motion.a 
            key={icon.name} 
            href={icon.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-link" 
            whileHover={{ scale: 1.2 }}
            title={icon.name}
          >
            <img src={`/socials_v3/${icon.file}`} alt={icon.name} className="social-icon-img" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
